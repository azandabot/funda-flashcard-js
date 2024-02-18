import FlashcardList from "./FlashcardList";
import { useState } from "react"; 

const Quiz = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const NextCardHandler = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 < flashcards.length ? prevIndex + 1 : 0)
    }

    return (
        <div className="quiz">
          <FlashcardList flashcards={[flashcards[currentIndex]]} />
          <button onClick={NextCardHandler}>Next Card</button>
        </div>
    );
}

export default Quiz