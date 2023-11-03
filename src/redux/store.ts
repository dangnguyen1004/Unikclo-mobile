import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import {composeWithDevTools} from '@redux-devtools/extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware: Array<any> = [];
middleware.push(createLogger());

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers: [composeWithDevTools(applyMiddleware(...middleware))],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

const persister = persistStore(store);

export {persister, store};
