import React, {FC} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFirstNumber,
  setOperatorArithmetic,
  setSecondNumber,
} from '../../store/repositoriyCalculate/repositoriyCalculate';
import {
  selectFirstNumber,
  selectoperatorArithmetic,
  selectSecondNumber,
} from '../../store/repositoriyCalculate/selector';
import {ButtonsBlock} from '../buttons';
import {colorsButtons} from '../colors/styles';
import {styles} from './style';

export const ButtonsWindow: FC = () => {
  const firstNumber = useSelector(selectFirstNumber);
  const secondNumber = useSelector(selectSecondNumber);
  const operator = useSelector(selectoperatorArithmetic);
  const dispatch = useDispatch();

  const clearCalculator = () => {
    dispatch(setFirstNumber(''));
    dispatch(setSecondNumber(''));
    dispatch(setOperatorArithmetic(''));
  };
  const onPressNumber = async (text: string) => {
    if (operator) {
      dispatch(setSecondNumber(text));
    } else {
      dispatch(setFirstNumber(firstNumber + text));
    }
  };
  const onPressOperand = (text: string) => {
    if (operator) {
      onCalculate();
    }
    dispatch(setOperatorArithmetic(text));
  };
  const onCalculate = () => {
    if (firstNumber && operator && secondNumber) {
      const result = eval(firstNumber + operator + secondNumber);
      dispatch(setFirstNumber(result));
      dispatch(setSecondNumber(''));
      dispatch(setOperatorArithmetic(''));
    }
  };

  const Buttons = [
    {
      value: 'delete',
      text: 'AC',
      color: colorsButtons.topButtons,
      onPress: clearCalculator,
    },
    {value: 'delete', text: '+/-', color: colorsButtons.topButtons},
    {
      value: 'delete',
      text: '%',
      color: colorsButtons.topButtons,
      onPress: onPressOperand,
    },
    {
      value: 'delete',
      text: '/',
      color: colorsButtons.rightButtons,
      onPress: onPressOperand,
    },
    {
      value: 'delete',
      text: '7',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '8',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '9',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '*',
      color: colorsButtons.rightButtons,
      onPress: onPressOperand,
    },
    {
      value: 'delete',
      text: '4',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '5',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '6',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '-',
      color: colorsButtons.rightButtons,
      onPress: onPressOperand,
    },
    {
      value: 'delete',
      text: '1',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '2',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '3',
      color: colorsButtons.numberButtons,
      onPress: onPressNumber,
    },
    {
      value: 'delete',
      text: '+',
      color: colorsButtons.rightButtons,
      onPress: onPressOperand,
    },
    {
      value: 'delete',
      text: '0',
      color: colorsButtons.numberButtons,
      doubleWidth: true,
      onPress: onPressNumber,
    },
    {value: 'delete', text: ',', color: colorsButtons.numberButtons},
    {
      value: 'delete',
      text: '=',
      color: colorsButtons.rightButtons,
      onPress: onCalculate,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map(item => (
        <ButtonsBlock key={item.text} {...item} />
      ))}
    </View>
  );
};
