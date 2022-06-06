import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const SIZE_BUTTON = width / 4;

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,

    maxHeight: 100,
    width: SIZE_BUTTON,
    height: SIZE_BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  boxSizeButtons: {
    // margin: 5,
  },
});
