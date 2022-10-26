import {View} from 'react-native';
import React from 'react';
import Poppins from '../../atoms/Text';
import Progress from '../../atoms/Progress';
import {styles} from './style';

type PowerBarType = {
  title: string;
  value: number;
  color?: string;
  valueText?: any;
};

export default function PowerBar({title, value = 0.5, color}: PowerBarType) {
  return (
    <View style={styles.row}>
      <Poppins
        textAlign="right"
        type="Medium"
        style={[styles.gap, styles.right]}>
        {title}
      </Poppins>

      <Progress value={value} style={styles.flex1} color={color} />
    </View>
  );
}
