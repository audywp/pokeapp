import {
  Pressable,
  PressableProps,
  StyleSheet,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';
import TextInput from '../../atoms/Input';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';

type StyleType = {
  containerStyle: object;
} & TextInputProps;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },

  icon: {
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.secondary,
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(16),
  },
});

export default function SearchMolecules(
  props: StyleType & PressableProps & TextInputProps,
) {
  return (
    <View style={props.containerStyle}>
      <View style={styles.input}>
        <TextInput style={{color: COLOR.text}} {...props} />
      </View>
      <Pressable onPress={props.onPress} style={styles.icon}>
        <EvilIcons name="search" size={moderateScale(32)} color={COLOR.text} />
      </Pressable>
    </View>
  );
}
