import {createSlice} from '@reduxjs/toolkit';
import {ICommonSlice} from './common.interfaces';

const initialState: ICommonSlice = {};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
});

export default commonSlice.reducer;
