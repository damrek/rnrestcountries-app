import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  capital: null,
  region: null,
  language: null,
  population: null,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    change: (state, action) => {
      const { capital, region, language, population } = action.payload;
      state.capital = capital;
      state.region = region;
      state.language = language;
      state.population = population;
    },
    cleanAll: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.capital = null;
      state.region = null;
      state.language = null;
      state.population = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, cleanAll } = filterSlice.actions;

export default filterSlice.reducer;
