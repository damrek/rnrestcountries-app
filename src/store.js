import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterReducer from './features/filter/filterSlice';
import { countriesApi, countriesApiCodes } from './services/countriesService';

export const store = configureStore({
  reducer: {
    filterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [countriesApiCodes.reducerPath]: countriesApiCodes.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { warnAfter: 128 },
      immutableCheck: { warnAfter: 128 },
    })
      .concat(countriesApi.middleware)
      .concat(countriesApiCodes.middleware),
});

setupListeners(store.dispatch);
