import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterReducer from './features/filter/filterSlice';
import { countriesApi } from './services/countriesService';

export const store = configureStore({
  reducer: {
    filterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { warnAfter: 128 },
      immutableCheck: { warnAfter: 128 },
    }).concat(countriesApi.middleware),
});

setupListeners(store.dispatch);
