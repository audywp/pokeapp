import React from 'react';
import {PressableProps, TextInputProps} from 'react-native';
import SearchMolecules from '../../molecules/Search';
import {styles} from './style';

export default function SearchOrganism(props: PressableProps & TextInputProps) {
  return (
    <SearchMolecules
      style={styles.searchInput}
      containerStyle={styles.container}
      onPress={props.onPress}
      {...props}
    />
  );
}
