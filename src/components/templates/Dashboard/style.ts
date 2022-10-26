import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(4),
  },
  container: {marginTop: moderateScale(24)},
});
