import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(24),
    paddingHorizontal: moderateScale(8),
    marginTop: moderateScale(12),
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: moderateScale(12),
  },
});
