import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/userSlice';

const middleware = [...getDefaultMiddleware(), logger];
export const store = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    middleware,
  });

export default store;
