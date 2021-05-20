import React from 'react';
import Character from './Character';
import { useCharacters } from '../hooks/harryPotter';

function CharacterList() {
  const { characters } = useCharacters();

  return (
    <ul aria-label="characters">
      {characters.map((character) => {
        return (
          <li key={character.name}>
            <Character
              name={character.name}
              species={character.species}
              house={character.house}
              birthday={character.birthday}
              ancestry={character.ancestry}
              wand={character.wand}
              image={character.image}
              patronus={character.patronus}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CharacterList;
