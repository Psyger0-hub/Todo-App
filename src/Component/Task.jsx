import React from "react";
import Button from "./Button";
import { customButtonStyle, taskStyles } from "../Styles/style";

const Task = (props) => {
  const { task, completeTask, removeTask } = props;

  return (
    <div
      style={{
        ...taskStyles,
        textDecoration: task.completed ? "line-through" : "none", // Line-through for completed tasks
        opacity: task.completed ? 0.5 : 1, // Less opacity for completed tasks
      }}
    >
      {task.text}
      <div className="button-container">
        <Button
          text={task.completed ? "Undo" : "Done"} // Toggle between Done and Undo
          handleOnClick={() => completeTask(task.id)} // Pass task.id to completeTask
          ownStyle={customButtonStyle}
        />
        <Button
          text="Remove"
          handleOnClick={() => removeTask(task.id)} // Pass task.id to removeTask
          ownStyle={customButtonStyle}
        />
      </div>
    </div>
  );
};

export default Task;
