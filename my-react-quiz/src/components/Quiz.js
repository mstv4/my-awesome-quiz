import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore, setCurrentQuestionIndex, resetQuiz } from "./actions";
import shuffledQuestions from "./questions";

function Quiz() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);

  const handleGuess = (answer) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (currentQuestion.answer === answer) {
      dispatch(setScore(score + 1));
    }
    dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
  };

  const hasEnded = () => {
    return currentQuestionIndex >= shuffledQuestions.length;
  };

  const reset = () => {
    dispatch(resetQuiz());
  };

  const displayNext = () => {
    if (hasEnded()) {
      return (
        <div className="wrapper">
          <h1>Гра Закінчена</h1>
          <h2>
            Ваш Рахунок: [ <span>{score}</span> із 10 ]
          </h2>
          <button onClick={reset}>Розпочати Нову Гру</button>
        </div>
      );
    } else {
      const currentQuestion = shuffledQuestions[currentQuestionIndex];
      return (
        <div className="wrapper">
          <h1>
            Запитання - [ <span>{currentQuestionIndex + 1}</span> ]
          </h1>
          <h2>{currentQuestion.text}</h2>
          {currentQuestion.choices.map((choice, index) => (
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
