import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { userReducer } from './auth/userSlice';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
