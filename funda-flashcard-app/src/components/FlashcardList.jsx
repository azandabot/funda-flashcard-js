import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
    return (
      <div className="flashcard-list">
        {flashcards.map((card) => (
          <Flashcard key={card.id} card={card} />
        ))}
      </div>
    );
};
  
export default FlashcardList;