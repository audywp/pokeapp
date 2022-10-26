import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

type Divider = {
  color?: string;
  width?: number;
  height: number;
};

export default function Divider({
  color = COLOR.secondaryText,
  width = 2,
  height,
}: Divider) {
  const styles = StyleSheet.create({
    bordered: {
      borderLeftWidth: width,
      borderLeftColor: color,
      height,
    },
  });

  return <View style={styles.bordered} />;
}
