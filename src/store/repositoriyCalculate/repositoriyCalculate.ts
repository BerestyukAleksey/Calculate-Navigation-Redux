import {createSlice} from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    firstNumber: '',
    secondNumber: '',
    operatorArithmetic: '',
  },
  reducers: {
    setFirstNumber: (state, action) => {
      state.firstNumber = action.payload;
    },
    setSecondNumber: (state, action) => {
      state.secondNumber = action.payload;
    },
    setOperatorArithmetic: (state, action) => {
      state.operatorArithmetic = action.payload;
    },
  },
});

// Action creators are generated foreach case reducer function
export const {setFirstNumber, setSecondNumber, setOperatorArithmetic} =
  calculatorSlice.actions;

export const calculatorReducer = calculatorSlice.reducer;
