import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

type ContainerType = {
  children: JSX.Element[] | JSX.Element;
};

const styles = {
  flex: 1,
  paddingHorizontal: widthPercentageToDP(4),
  paddingVertical: heightPercentageToDP(2),
};

export default function Container({children}: ContainerType) {
  return <SafeAreaView style={styles}>{children}</SafeAreaView>;
}
