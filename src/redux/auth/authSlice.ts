import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAuthSlice} from './auth.interfaces';
import {onLogin} from './auth.actions';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN} from '../../constants/storageKeys';

const initialState: IAuthSlice = {
  token: '',
  isLogged: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{token: string}>) => {
      state.isLogged = true;
      state.token = action.payload.token;
    },
    logOut: state => {
      state.isLogged = false;
      AsyncStorage.removeItem(TOKEN);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(onLogin.pending, state => {
        state.loading = true;
      })
      .addCase(onLogin.fulfilled, (state, action) => {
        state.token = action.payload?.token || '';
        state.isLogged = true;
        state.loading = false;
      })
      .addCase(onLogin.rejected, state => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const {login, logOut} = authSlice.actions;
