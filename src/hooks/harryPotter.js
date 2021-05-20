import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api';

export const useCharacters = () => {
  //   const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((characters) => setCharacters(characters));
    //   .finally(() => setLoading(false));
  }, []);

  return characters;
};
