import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import Container from '../../atoms/Container';
import CardList from '../../molecules/CardList';
import HeaderOrganism from '../../organisms/Header';
import Poppins from '../../atoms/Text';
import SearchOrganism from '../../organisms/Search';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import {COLOR} from '../../../config/color';

type DataType = {
  pokemonList: any;
  onShowMore: () => void;
  isLoading: boolean;
  onChangeText: (e: string) => void;
  onPress: () => void;
};

export default function DashboardTemplate({
  pokemonList,
  onShowMore,
  isLoading,
  onChangeText,
  onPress,
}: DataType) {
  return (
    <Container>
      <HeaderOrganism backable={false} withLogo titleSize={32} />
      <Poppins type="Bold" size={20}>
        Pokemon List
      </Poppins>
      <SearchOrganism
        onPress={onPress}
        onChangeText={onChangeText}
        placeholder="Search here ..."
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={pokemonList}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={CardList}
        ListEmptyComponent={() => (
          <Poppins>Ooops, your pokemon is not born yet!</Poppins>
        )}
        ListFooterComponent={() => {
          if (pokemonList.length <= 0) {
            return null;
          }
          return (
            <TouchableOpacity onPress={onShowMore} style={styles.footer}>
              {isLoading ? (
                <ActivityIndicator color={COLOR.textSecondary} />
              ) : (
                <Poppins>Show more</Poppins>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}
