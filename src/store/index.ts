import {configureStore} from '@reduxjs/toolkit';
import {calculatorReducer} from './repositoriyCalculate/repositoriyCalculate';

export const store = configureStore({
  reducer: {
    calculatorReducer,
  },
});

export type IStore = typeof store.getState;
