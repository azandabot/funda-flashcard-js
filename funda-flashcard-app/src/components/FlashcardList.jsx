import Flashcard from "./Flashcard";
import styles from '../App.module.css';

const FlashcardList = ({ flashcards }) => {
    return (
      <div className={styles.flashcardlist}>
        {flashcards.map((card) => (
          <Flashcard key={card.id} card={card} />
        ))}
      </div>
    );
};
  
export default FlashcardList;