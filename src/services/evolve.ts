import {useCallback, useState} from 'react';
import {request} from '../helpers/request';

export const useEvolvepokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
};
