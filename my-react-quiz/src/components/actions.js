export const actionTypes = {
  SET_SCORE: "SET_SCORE",
  SET_CURRENT_QUESTION_INDEX: "SET_CURRENT_QUESTION_INDEX",
  RESET_QUIZ: "RESET_QUIZ",
};

export function setScore(score) {
  return {
    type: actionTypes.SET_SCORE,
    score,
  };
}

export function setCurrentQuestionIndex(index) {
  return {
    type: actionTypes.SET_CURRENT_QUESTION_INDEX,
    index,
  };
}

export function resetQuiz() {
  return {
    type: actionTypes.RESET_QUIZ,
  };
}
