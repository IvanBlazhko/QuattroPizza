import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

import storage from 'redux-persist/lib/storage';

import { pizzaApi } from './pizzaSlice/pizzaSlice';
import { dessertsApi } from './dessertsSlice/dessertsSlice';
import { drinksApi } from './drinksSlice/drinksSlice';
import { cartSlice } from './cartSlice/cartSlice';
import { productsFilter } from './productsFilterSlice/productsFilterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'cart',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [dessertsApi.reducerPath]: dessertsApi.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    cart: persistedReducer,
    productsFilter: productsFilter.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(pizzaApi.middleware)
      .concat(dessertsApi.middleware)
      .concat(drinksApi.middleware),
});

setupListeners(store.dispatch);

export const persist = persistStore(store);
