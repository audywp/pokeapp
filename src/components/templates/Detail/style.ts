import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';

export const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    heroColor: {
      flexGrow: 1,
      backgroundColor: backgroundColor,
      paddingHorizontal: widthPercentageToDP(1),
    },
    blackContainer: {
      backgroundColor: COLOR.primary,
      flex: 1,
      borderTopLeftRadius: moderateScale(8),
      borderTopRightRadius: moderateScale(8),
      paddingTop: moderateScale(100),
      paddingHorizontal: widthPercentageToDP(4),
      paddingBottom: moderateScale(80),
    },
    type: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: moderateScale(24),
    },
    about: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: moderateScale(24),
      marginBottom: moderateScale(24),
    },
    aboutDesc: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageHero: {
      // position: 'absolute',
      // top: moderateScale(30),
      marginBottom: -moderateScale(60),
      alignSelf: 'center',
      zIndex: 100,
    },
    shadow: {
      height: moderateScale(125),
    },
    center: {
      width: widthPercentageToDP(100 / 4),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
