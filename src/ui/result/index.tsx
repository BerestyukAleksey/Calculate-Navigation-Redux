import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  selectFirstNumber,
  selectoperatorArithmetic,
  selectSecondNumber,
} from '../../store/repositoriyCalculate/selector';
import {styles} from './style';

export const ResultWindow = () => {
  const firstNumber = useSelector(selectFirstNumber);
  const secondNumber = useSelector(selectSecondNumber);
  const operator = useSelector(selectoperatorArithmetic);

  return (
    <View style={styles.container}>
      <Text style={styles.textResult}>
        {firstNumber}
        {operator}
        {secondNumber}
      </Text>
    </View>
  );
};
