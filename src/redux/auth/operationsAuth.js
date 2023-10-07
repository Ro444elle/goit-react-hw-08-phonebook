import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactApi } from 'api/api';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase';

axios.defaults.baseURL = 'https://65170324582f58d62d34b2ac.mockapi.io';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(response.user);
      // setAuthHeader(res.data.token);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('user/logIn', async (user, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response.user);
    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await contactApi.post('/users/logout');
    // clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await contactApi.get('/users/me');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
