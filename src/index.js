import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.8: unicafe step3
// Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

const Statistics = (prop) => {
  const sum = prop.g + prop.n + prop.b;
  const avg = sum / 3;
  const pos = () => {
    const formula = prop.g / sum;
    if (!isNaN(formula)) {
      return prop.g / (prop.g + prop.b + prop.n);
    } else {
      return 0;
    }
  };

  return (
    <>
      <h2>Statistics</h2>
      <p>good {prop.g}</p>
      <p>neutral {prop.n}</p>
      <p>bad {prop.b}</p>
      <p>all {sum}</p>
      <p>average {avg.toFixed(2)}</p>
      <p>positive {pos().toFixed(2)}%</p>
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
