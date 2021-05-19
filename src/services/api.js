export const fetchCharacters = async () => {
  const res = await fetch('http://hp-api.herokuapp.com/api/characters');

  const characters = res.json();

  return characters.map((character) => ({
    name: character.name,
    species: character.species,
    house: character.house,
    birthday: character.dateOfBirth,
    ancestry: character.ancestry,
    wand: character.wand.length - character.wand.wood - character.wand.core,
    image: character.image,
    patronus: character.patronus,
  }));
};
