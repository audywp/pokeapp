import React from 'react';
import {LinearProgress, LinearProgressProps} from '@rneui/themed';
import {styles} from './style';

export default function Progress({
  value,
  trackColor,
  variant = 'determinate',
  style,
  color,
}: LinearProgressProps) {
  return (
    <LinearProgress
      trackColor={trackColor}
      style={[styles.progress, style]}
      color={color}
      value={value}
      variant={variant}
      animation={false}
    />
  );
}
