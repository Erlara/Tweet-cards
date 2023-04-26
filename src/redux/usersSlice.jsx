import { createSlice } from '@reduxjs/toolkit';
import { changeUser, fetchUsersPage } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    addPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsersPage.pending, handlePending)
      .addCase(fetchUsersPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items =
          state.page === 1
            ? (state.items = action.payload)
            : (state.items = [...state.items, ...action.payload]);
      })
      .addCase(fetchUsersPage.rejected, handleRejected)
      .addCase(changeUser.pending, handlePending)
      .addCase(changeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
         state.items = state.items.map(item => {
           if (item.id === action.payload.id) {
             return {
               ...item,
               followers: action.payload.followers,
             };
           }
           return item;
         });
      })
      .addCase(changeUser.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
export const { addPage } = usersSlice.actions;
