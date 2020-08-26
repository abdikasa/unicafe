import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.10: unicafe step5
// Let's continue refactoring the application. Extract the following two components:

// Button for defining the buttons used for submitting feedback
// Statistic for displaying a single statistic, e.g. the average score.
// To be clear: the Statistic component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

const Statistic = ({ text, value }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + neutral + bad;
  let avg = sum / 3;
  let positive = good / sum;

  if (sum === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={sum} />
      <Statistic text="avg" value={avg} />
      <Statistic text="pos" value={positive} />
    </div>
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
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
