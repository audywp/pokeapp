import {Text, TextProps, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {COLOR} from '../../../config/color';
import {moderateScale} from 'react-native-size-matters';

type TextType = {
  color?: string;
  size?: number;
  type?: string;
  children: TextProps;
  textAlign?: 'left' | 'center' | 'right';
} & TextProps &
  TextStyle;

export default function Poppins({
  color = COLOR.text,
  children,
  size = 14,
  type = 'Regular',
  textAlign,
  style,
}: TextType) {
  const styles = StyleSheet.create({
    text: {
      color,
      fontSize: moderateScale(size),
      fontFamily: `Poppins-${type}`,
      letterSpacing: 1,
      textAlign,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
}
