import FlashcardList from "./FlashcardList";
import styles from '../App.module.css';
import { useState } from "react"; 

const Quiz = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const NextCardHandler = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 < flashcards.length ? prevIndex + 1 : 0)
    }

    return (
        <div className={styles.quiz}>
          <FlashcardList flashcards={[flashcards[currentIndex]]} />
          <button className={styles.btnNextCard} onClick={NextCardHandler}>Next Card</button>
        </div>
    );
}

export default Quiz