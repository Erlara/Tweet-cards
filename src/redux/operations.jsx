import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644249a533997d3ef90c6c35.mockapi.io';

export const fetchUsersPage = createAsyncThunk(
  'users/fetchUsersPage',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get('/Users', {
        params: { page, limit: 3 },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'users/changeUser',
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await axios.get(`/Users/${id}`, { followers });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
