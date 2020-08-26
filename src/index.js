import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1.6: unicafe step1
// Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

// The application must display the total number of collected feedback for each category.

import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <div>code here</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
