import {useCallback, useState} from 'react';
import {request} from '../helpers/request';

type ReqPokemonList = {
  limit?: number;
  offset: number;
};

export const useGetAllPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Record<string, any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingShowMore, setloadingShowMore] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const getPokemons = useCallback(
    async ({limit = 5, offset}: ReqPokemonList) => {
      try {
        setLoading(true);
        setloadingShowMore(true);
        const tempList: Record<string, any>[] = [];

        for (let i = offset; i < limit; i++) {
          const data = await request(
            `/pokemon/${i + 1}?offset=${offset}&limit=${limit}`,
          );

          setValue((i + 1) / limit);
          tempList.push(data);
        }

        setPokemonList(tempList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setloadingShowMore(false);
      }
    },
    [],
  );

  const showMore = useCallback(async ({limit = 5, offset}: ReqPokemonList) => {
    try {
      setloadingShowMore(true);

      for (let i = offset; i < limit; i++) {
        const data = await request(
          `/pokemon/${i + 1}?offset=${offset}&limit=${limit}`,
        );

        setValue((i + 1) / limit);
        setPokemonList((prevState: Record<string, any>[]) => [
          ...prevState,
          data,
        ]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloadingShowMore(false);
    }
  }, []);

  const searchPokemonList = useCallback(async (params: string) => {
    try {
      const data = await request(`/pokemon/${params}`);
      console.log(data);
      if (Object.keys(data).length === 0) {
        setPokemonList([]);
      } else {
        setPokemonList(() => [data]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    pokemonList,
    loading,
    value,
    getPokemons,
    loadingShowMore,
    showMore,
    searchPokemonList,
  };
};
