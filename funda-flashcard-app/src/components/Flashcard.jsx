const Flashcard = ({ card }) => {
    return (
        <div className="flashcard">
          <div className="front">{card.word}</div>
          <div className="back">{card.translation}</div>
        </div>
      );
}

export default Flashcard