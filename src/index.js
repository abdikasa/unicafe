import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.11: unicafe step6
// Display the statistics in an HTML table

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
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
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
        </tbody>
        <tfoot>
          <Statistic text="all" value={sum} />
          <Statistic text="avg" value={avg.toFixed(2)} />
          <Statistic text="pos" value={positive.toFixed(2) + "%"} />
        </tfoot>
      </table>
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
      <Button
        onClick={() => {
          setGood(good + 1);
        }}
        text="good"
      />
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
        text="neutral"
      />
      <Button
        onClick={() => {
          setBad(bad + 1);
        }}
        text="bad"
      />
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
