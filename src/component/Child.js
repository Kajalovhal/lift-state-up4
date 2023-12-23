import React from "react";

const Child = ({ tasks, onComplete }) => {
  return (
    <div className="Child">
      <h1>Child Component</h1>
      <ul>
        <li>
          Learn React
          {!tasks.learn && (
            <button onClick={() => onComplete("learn")}>Complete</button>
          )}
        </li>
      </ul>
      <ul>
        <li>
          Build a React app
          {!tasks.build && (
            <button onClick={() => onComplete("build")}>Complete</button>
          )}
        </li>
      </ul>
      <ul>
        <li>
          Deploy the React app
          {!tasks.deploy && (
            <button onClick={() => onComplete("deploy")}>Complete</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Child;
