import React from 'react';
import CharacterList from '../components/CharacterList';
import Spinner from '../components/Spinner';
import { useCharacters } from '../hooks/harryPotter';

function HarryPotterContainer() {
  const { characters, loading } = useCharacters();
  return (
    <div>
      {loading ? <Spinner /> : <CharacterList characters={characters} />}
    </div>
  );
}

export default HarryPotterContainer;
