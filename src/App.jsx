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

    // handle nav item clicks
    const NavItemClickHandler = (option) => {
      setViewFlashCards(option === 'list' || option === 'both')
    }

    const [viewFlashCards, setViewFlashCards] = useState(false)
  
    return (
      <div className={styles.app}>
        <Navbar onNavItemClick={NavItemClickHandler} />
        
        { viewFlashCards && <FlashcardList flashcards={flashcards} /> }
        <Quiz flashcards={flashcards} />
      </div>
    );
};

export default App