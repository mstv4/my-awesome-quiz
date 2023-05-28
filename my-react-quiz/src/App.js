import React from "react";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./components/QuizContext";
import "./styles/App.css";

function App() {
  return (
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
  );
}

export default App;
