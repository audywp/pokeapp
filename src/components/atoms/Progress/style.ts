import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const heightValue = 12;

export const styles = StyleSheet.create({
  progress: {
    height: moderateScale(heightValue),
    borderRadius: moderateScale(heightValue / 2),
  },
});
