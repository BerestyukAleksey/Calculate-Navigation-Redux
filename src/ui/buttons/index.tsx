import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {SIZE_BUTTON, styles} from './style';

interface IProps {
  doubleWidth?: boolean;
  value: string;
  text: string;
  color: string;
  onPress: (test?: string) => void;
}

export const ButtonsBlock: FC<IProps> = ({
  text,
  doubleWidth,
  color,
  onPress,
}) => {
  const Click = () => {
    onPress(text);
  };

  return (
    <TouchableOpacity onPress={() => Click()}>
      <View
        style={[
          styles.container,
          {
            width: doubleWidth ? SIZE_BUTTON * 2 : SIZE_BUTTON,
            backgroundColor: color,
            borderRadius: 50,
            borderColor: 'black',
            padding: 5,
          },
        ]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
