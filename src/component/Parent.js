import React from "react";
import Child from "./Child";

const Parent = () => {
  // State to track task completion
  const [tasks, setTasks] = React.useState({
    learn: false,
    build: false,
    deploy: false,
  });

  // Function to handle task completion
  const handleComplete = (task) => {
    setTasks((prevTasks) => ({ ...prevTasks, [task]: true }));
  };

  return (
    <div className="Parent">
      <h1>Parent Component</h1>
      <Child tasks={tasks} onComplete={handleComplete} />
    </div>
  );
};

export default Parent;
