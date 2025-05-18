import React, { useState } from "react";
import flashCards from "./data";
import "./styles.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setIndex((prev) => (prev + 1 < flashCards.length ? prev + 1 : 0));
    setShowAnswer(false);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : flashCards.length - 1));
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const progress = ((index + 1) / flashCards.length) * 100;

  return (
    <div className="container">
      <h1>📚 Flash Cards</h1>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-text">
          {Math.round(progress)}% &nbsp; ({index + 1} of {flashCards.length})
        </div>
      </div>
      <div className="card">
        <p>{showAnswer ? flashCards[index].answer : flashCards[index].question}</p>
      </div>
      <div className="buttons">
        <button onClick={prevCard}>◀ Previous</button>
        <button onClick={toggleAnswer}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button onClick={nextCard}>Next ▶</button>
      </div>
    </div>
  );
}