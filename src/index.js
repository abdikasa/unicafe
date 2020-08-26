import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.7: unicafe step2
// Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calcPos = () => {
    let formula = good / (good + bad + neutral);
    if (!isNaN(formula)) {
      return good / (good + bad + neutral);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {((good + bad + neutral) / 3).toFixed(2)}</p>
      <p>positive {calcPos().toFixed(2)}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
