import {TextInput as Input, TextInputProps} from 'react-native';
import React from 'react';
import {COLOR} from '../../../config/color';

export default function TextInput(props: TextInputProps) {
  return <Input placeholderTextColor={COLOR.secondaryText} {...props} />;
}
