import {ImageProps, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import FastImage, {
  ResizeMode,
  FastImageProps,
  Source,
} from 'react-native-fast-image';

type ImageType = {
  height: number;
  width: number;
  source: number | Source | string;
  resizeMode?: ResizeMode;
} & ImageProps &
  ImageSourcePropType &
  FastImageProps;

export default function Image({
  height,
  width,
  source,
  resizeMode = 'contain',
}: ImageType) {
  const styles = StyleSheet.create({
    image: {
      height,
      width,
    },
  });
  return (
    <FastImage style={styles.image} source={source} resizeMode={resizeMode} />
  );
}
