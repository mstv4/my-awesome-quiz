import { combineReducers } from "redux";
import { actionTypes } from "./actions";

function scoreReducer(state = 0, action) {
  switch (action.type) {
    case actionTypes.SET_SCORE:
      return action.score;
    default:
      return state;
  }
}

function currentQuestionIndexReducer(state = 0, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_QUESTION_INDEX:
      return action.index;
    case actionTypes.RESET_QUIZ:
      return 0;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  score: scoreReducer,
  currentQuestionIndex: currentQuestionIndexReducer,
});

export default rootReducer;
