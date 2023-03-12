import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./Pages/Counter";
import ProductPage from "./Pages/ProductPage";
import RestaurantDetails from "./Pages/RestaurantDetails";
import TodoTasks from "./Pages/TodoTasks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoTasks />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/restaurant/foods" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
