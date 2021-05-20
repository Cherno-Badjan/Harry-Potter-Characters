import React from 'react';
import CharacterList from '../components/CharacterList';
import { useCharacters } from '../hooks/harryPotter';

function HarryPotterContainer() {
  const { characters } = useCharacters();
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}

export default HarryPotterContainer;
