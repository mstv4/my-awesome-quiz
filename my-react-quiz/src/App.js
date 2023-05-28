import React from "react";
import Quiz from "./components/Quiz";
import { Provider } from "react-redux";
import store from "./components/store";
import "./styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
