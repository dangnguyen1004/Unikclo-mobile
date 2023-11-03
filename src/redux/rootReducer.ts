import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import commonReducer from './common/commonSlice';
import todoReducer from './todo/todoSlice';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  todo: todoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
