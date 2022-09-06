import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';
import styles from '../styles/detail.module.css';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(character);

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{character.name}</h2>

      <div className={styles.details}>
        <img src={character.image} alt="Imagen" />
        <p>
          Genero: {character.gender} <br />
          Origen: {character.origin?.name}
          <br />
          Especie: {character.species}
          <br />
          {character.status === 'Alive' ? 'Está vivo' : 'Fallecio'}
        </p>
      </div>
    </div>
  );
};
export default CharacterDetail;
