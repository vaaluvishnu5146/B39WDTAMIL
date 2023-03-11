import React, { useState } from "react";

export default function TodoTasks() {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");

  function handleInputChange(e) {
    if (e) {
      setQuery(e.target.value);
    }
  }

  function handleAddTask(e) {
    if (e && query.length > 5) {
      // PRIMITIVE
      // NON-PRIMITIVE
      let tasksCopy = [...tasks];
      tasksCopy.push(query);
      setTasks(tasksCopy);
      setQuery("");
    }
  }

  return (
    <section className="centered-layout">
      <div className="todos-container">
        <div className="form-header">
          <input
            className="todo-input"
            // TWO_WAY DATA BINDING
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your tasks here"
          />
          <button
            className="todo-submit"
            onClick={handleAddTask}
            disabled={query.length < 5}
          >
            Add
          </button>
        </div>
        <div className="form-todos-container">
          <h5 className="form-todos-message">YOUR TASKS FOR TODAY</h5>
          <div className="tasks-list">
            {tasks.map((d, i) => (
              <div key={`task-list-item-${i}`} className="list-item">
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
