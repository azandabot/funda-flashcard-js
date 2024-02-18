import { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import Quiz from './components/Quiz';
import styles from'./App.module.css';

const App = () => {
    const [flashcards, setFlashcards] = useState([
      { id: 1, word: 'Hello', translation: 'Sawubona' },
      { id: 2, word: 'Goodbye', translation: 'Bhabhayi' },
    ]);
  
    return (
      <div className={styles.app}>
        <h1>Language Learning Flashcards</h1>
        <FlashcardList flashcards={flashcards} />
        <Quiz flashcards={flashcards} />
      </div>
    );
};

export default App