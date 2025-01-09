import React, { useState } from "react";
import Input from "./Component/Input";
import Button from "./Component/Button";
import Task from "./Component/Task";
import { appStyle, inputStyle, buttonStyle } from "./Styles/style"; // Import the button style

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [visibleTasks, setVisibleTasks] = useState(5); // Initial number of tasks to display

  // Add new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(""); // Clear the input field
    }
  };

  // Add task when the "Enter" key is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Mark task as completed or incomplete
  const completeTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Remove a task
  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Handle clicking the Read More button
  const handleReadMore = () => {
    setVisibleTasks(visibleTasks + 5); // Show 5 more tasks
  };

  // Sort tasks so that incomplete tasks are shown first and completed tasks are pushed to the bottom
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div style={{ ...appStyle, backgroundColor: "#add8e6", minHeight: "100vh" }}>
      <h3>Todo List</h3>
      <div>
        <Input
          type="text"
          style={inputStyle}
          placeholder="Add a new task"
          handleOnChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          onKeyPress={handleKeyPress} // Listen for Enter key
        />
        <Button text="+" handleOnClick={addTask} style={buttonStyle} />
      </div>

      {/* Display tasks dynamically based on visibleTasks */}
      <div style={{ gap: "1em" }}>
        {sortedTasks.slice(0, visibleTasks).map((task) => (
          <Task
            key={task.id}
            task={task}
            completeTask={() => completeTask(task.id)} // Pass task id to completeTask
            removeTask={() => removeTask(task.id)} // Pass task id to removeTask
          />
        ))}
      </div>

      {/* Show Read More button if there are more tasks to display */}
      {sortedTasks.length > visibleTasks && (
        <Button
        text="Read More"
        handleOnClick={handleReadMore}
        style={{
          padding: "10px 20px",   // Increased padding for larger button
          fontSize: "16px",        // Adjust font size to match button style
          width: "auto",           // Allow width to adjust based on content
          minWidth: "120px",       // Set a minimum width to ensure button stays a good size
          whiteSpace: "nowrap",    // Prevent text overflow
        }}
      />
      )}
    </div>
  );
};

export default App;
