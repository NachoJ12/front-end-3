import React from 'react';
import styles from './H1.module.css';

const Titulo = ({ palabra, index }) => {
  return (
    <h1 key={index} className={styles.blue}>
      {palabra}
    </h1>
  );
};

export default Titulo;
