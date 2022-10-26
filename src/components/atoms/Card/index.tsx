import React from 'react';
import {View, ViewProps} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

type CardListType = {
  bgColor?: string;
  children: JSX.Element;
  style?: object;
} & ViewProps;

export default function Card({
  bgColor = COLOR.secondary,
  children,
  style,
}: CardListType) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: bgColor,
      justifyContent: 'center',
    },
  });
  return <View style={[styles.card, style]}>{children}</View>;
}
