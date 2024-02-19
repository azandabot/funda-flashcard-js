import { useState } from 'react';
import styles from './Flashcard.module.css';

const Flashcard = ({ card }) => {
  const [view, setView] = useState('front');

  const changeViewHandler = () => {
    setView(view === 'front' ? 'back' : 'front');
  };

  return (
    <div className={styles.flashcard} onClick={changeViewHandler}>
      <div className={view === 'front' ? styles.front : styles.back}>
        <b>{card.word}</b>
      </div>
      <div className={view === 'back' ? styles.front : styles.back}>
        <i>{card.translation}</i>
      </div>
      <div className={styles.pagination}>{card.id}</div>
    </div>
  );
};

export default Flashcard;
