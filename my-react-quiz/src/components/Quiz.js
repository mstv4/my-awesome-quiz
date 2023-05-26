import React from "react";
import { useQuiz } from "./QuizContext";

function Quiz() {
  const { score, currentQuestionIndex, handleGuess, getCurrentQuestion, hasEnded, resetQuiz } = useQuiz();

  const displayNext = () => {
    if (hasEnded()) {
      return (
        <div>
          <h1>Гра Закінчена</h1>
          <h2>Ваш Рахунок: {score}</h2>
          <button onClick={resetQuiz}>Розпочати Нову Гру</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Запитання {currentQuestionIndex + 1}</h1>
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

  return <div>{displayNext()}</div>;
}

export default Quiz;
