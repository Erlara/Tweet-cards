import axios from 'axios';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './contactsSlice';
//import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644249a533997d3ef90c6c35.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     //console.log(text);
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
