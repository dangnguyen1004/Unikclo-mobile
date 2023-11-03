import AsyncStorage from '@react-native-community/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ILoginRequest} from './auth.interfaces';
import {handleLogin} from './auth.services';

export const onLogin = createAsyncThunk(
  'auth/login',
  async (data: ILoginRequest): Promise<any> => {
    try {
      const result = await handleLogin(data);
      AsyncStorage.setItem('token', result.token);
      return result;
    } catch (error) {
      throw error;
    }
  },
);
