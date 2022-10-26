import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const heightCard = 60;

export const styles = StyleSheet.create({
  heightCard: {
    height: moderateScale(heightCard),
    borderRadius: moderateScale(heightCard / 10),
    paddingLeft: moderateScale(16),
  },
  image: {
    position: 'absolute',
    right: 0,
    top: heightCard / 4,
  },
  capitalize: {
    textTransform: 'capitalize',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});
