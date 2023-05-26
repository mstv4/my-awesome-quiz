import React, { useState, useContext } from "react";
import shuffledQuestions from "./questions";

const QuizContext = React.createContext();

export function QuizProvider({ children }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleGuess = (answer) => {
    if (getCurrentQuestion().answer === answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const getCurrentQuestion = () => {
    return shuffledQuestions[currentQuestionIndex];
  };

  const hasEnded = () => {
    return currentQuestionIndex >= shuffledQuestions.length;
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const value = {
    score,
    currentQuestionIndex,
    handleGuess,
    getCurrentQuestion,
    hasEnded,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
