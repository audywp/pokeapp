import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  medium: {
    flex: 0.8,
    justifyContent: 'space-between',
    marginRight: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  gap: {
    flex: 1,
    textTransform: 'capitalize',
  },
  left: {
    marginLeft: moderateScale(8),
  },
  right: {
    marginRight: moderateScale(8),
  },
  flex1: {
    flex: 1,
  },
});
