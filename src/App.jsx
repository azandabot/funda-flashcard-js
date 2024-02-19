import { useState } from 'react';

import FlashcardList from './components/Flashcard/FlashcardList';
import Quiz from './components/Flashcard/Quiz';
import Navbar from './components/Navbar/Navbar'

import styles from'./App.module.css';

const App = () => {
    const [flashcards, setFlashcards] = useState([
      { id: 1, word: 'Hello', translation: 'Sawubona' },
      { id: 2, word: 'Goodbye', translation: 'Bhabhayi' },
    ]);
  
    return (
      <div className={styles.app}>
        <Navbar />
        
        <FlashcardList flashcards={flashcards} />
        <Quiz flashcards={flashcards} />
      </div>
    );
};

export default App