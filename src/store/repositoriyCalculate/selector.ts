import {IStore} from '..';
import {calculatorReducer} from './repositoriyCalculate';

export const selectFirstNumber = (store: IStore) => {
  return store.calculatorReducer.firstNumber;
};

export const selectSecondNumber = (store: IStore) => {
  return store.calculatorReducer.secondNumber;
};

export const selectoperatorArithmetic = (store: IStore) => {
  return store.calculatorReducer.operatorArithmetic;
};
