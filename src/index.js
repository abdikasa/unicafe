import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.9: unicafe step4
// Change your application to display statistics only once feedback has been gathered.

const Statistics = (prop) => {
  const sum = prop.g + prop.n + prop.b;
  const avg = sum / 3;
  const pos = prop.g / sum;
  const checkIfZero = (formula) => {
    if (!isNaN(formula) && formula !== 0) {
      if (formula == pos) {
        return formula.toFixed(2) + "%";
      }
      return formula.toFixed(2);
    } else {
      return "No feedback given";
    }
  };

  return (
    <>
      <h2>Statistics</h2>
      <p>good {prop.g}</p>
      <p>neutral {prop.n}</p>
      <p>bad {prop.b}</p>
      <p>all {checkIfZero(sum)}</p>
      <p>average {checkIfZero(avg)}</p>
      <p>positive {checkIfZero(pos)}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <Statistics g={good} b={bad} n={neutral}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
