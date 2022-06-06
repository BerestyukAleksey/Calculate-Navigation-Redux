import React from 'react';
import {View} from 'react-native';
import {ButtonsWindow} from './buttomWindow';
import {ResultWindow} from './result';
import {styles} from './style';
export const CalculateWindow = () => {
  return (
    <View style={styles.container}>
      <ResultWindow />
      <ButtonsWindow />
    </View>
  );
};
