import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(100),
    marginHorizontal: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  textStyles: {
    textTransform: 'capitalize',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 6,
  },
});
