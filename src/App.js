import React, { useState } from "react";
import "./App.css";
import Counter from "./Pages/Counter";
import TodoTasks from "./Pages/TodoTasks";

function App() {
  const [page, setPage] = useState("todos");
  return (
    <div className="App">
      {page === "counter" && <Counter />}
      {page === "todos" && <TodoTasks />}
    </div>
  );
}

export default App;
