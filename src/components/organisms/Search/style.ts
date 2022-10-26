import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';

export const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: COLOR.secondary,
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    color: COLOR.text,
  },
  container: {
    flexDirection: 'row',
    marginVertical: moderateScale(20),
  },
});
