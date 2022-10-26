import React, {useEffect, useState} from 'react';

import {useGetAllPokemon} from '../../../services/pokemon';
import LoadingComponent from '../../templates/Loading';
import DashboardTemplate from '../../templates/Dashboard';

export default function Dashboard() {
  const {
    pokemonList,
    loading,
    value,
    getPokemons,
    showMore,
    loadingShowMore,
    searchPokemonList,
  } = useGetAllPokemon();
  const [limit, setLimit] = useState(5);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getPokemons({offset: 0});
  }, [getPokemons]);

  const loadMore = () => {
    showMore({offset: limit, limit: limit + 5});
    setLimit((prevState: number) => prevState + 5);
  };

  const setSearch = (text: string) => {
    setSearchValue(text);
  };

  const findPokemon = () => {
    if (searchValue !== '') {
      searchPokemonList(searchValue);
    } else {
      getPokemons({offset: 0});
    }
  };

  if (loading) {
    return <LoadingComponent value={value} />;
  }

  return (
    <DashboardTemplate
      onPress={findPokemon}
      onChangeText={setSearch}
      onShowMore={loadMore}
      isLoading={loadingShowMore}
      pokemonList={pokemonList}
    />
  );
}
