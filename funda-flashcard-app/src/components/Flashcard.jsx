import styles from '../App.module.css';

const Flashcard = ({ card }) => {
    return (
        <div className={styles.flashcard}>
          <div className={styles.front}><b>{card.word}</b></div>
          <div className={styles.back}><i>{card.translation}</i></div>
        </div>
      );
}

export default Flashcard