import React from "react";
import { useQuiz } from "./QuizContext";

function Quiz() {
  const { score, currentQuestionIndex, handleGuess, getCurrentQuestion, hasEnded, resetQuiz } = useQuiz();

  const displayNext = () => {
    if (hasEnded()) {
      return (
        <div className="wrapper">
          <h1>Гра Закінчена</h1>
          <h2>
            Ваш Рахунок: [ <span>{score}</span> із 10 ]
          </h2>
          <button onClick={resetQuiz}>Розпочати Нову Гру</button>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <h1>
            Запитання - [ <span>{currentQuestionIndex + 1}</span> ]
          </h1>
          <h2>{getCurrentQuestion().text}</h2>
          {getCurrentQuestion().choices.map((choice, index) => (
            <button key={index} onClick={() => handleGuess(choice)}>
              {choice}
            </button>
          ))}
        </div>
      );
    }
  };

  return displayNext();
}

export default Quiz;
