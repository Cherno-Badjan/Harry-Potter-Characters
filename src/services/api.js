export const fetchCharacters = async () => {
  const res = await fetch('https://hp-api.onrender.com/api/characters');

  const characters = await res.json();

  return characters.map((character) => ({
    name: character.name,
    species: character.species,
    house: character.house,
    birthday: character.dateOfBirth,
    ancestry: character.ancestry,
    wand: character.wand.core,
    image: character.image,
    patronus: character.patronus,
  }));
};
