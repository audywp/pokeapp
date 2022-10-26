import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR.secondary,
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
  },
});
