import {View} from 'react-native';
import React from 'react';
import Poppins from '../../atoms/Text';
import Progress from '../../atoms/Progress';
import {moderateScale} from 'react-native-size-matters';

type LoadingType = {
  value: number;
  style: object;
};

export default function Loading({value, style}: LoadingType) {
  return (
    <View style={style}>
      <Poppins style={{marginBottom: moderateScale(8)}}>
        Please Wait ...
      </Poppins>
      <Progress value={value} />
    </View>
  );
}
