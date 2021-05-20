import React from 'react';
import PropTypes from 'prop-types';
import styles from './app/App.css';

function Character({
  name,
  species,
  house,
  birthday,
  ancestry,
  wand,
  image,
  patronus,
}) {
  return (
    <div className={styles.character}>
      <img src={image} alt={name} />
      <p>Name: {name}</p>
      <p>Species: {species}</p>
      <p>Hogwarts House: {house}</p>
      <p>Birthday: {birthday}</p>
      <p>Ancestry: {ancestry}</p>
      <p>Wand: {wand}</p>
      <p>Patronus: {patronus}</p>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  birthday: PropTypes.string,
  ancestry: PropTypes.string.isRequired,
  wand: PropTypes.string,
  patronus: PropTypes.string,
};

export default Character;
