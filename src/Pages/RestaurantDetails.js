import React, { useState, useEffect } from "react";
import FoodCard from "../Components/FoodCard";
import TopNav from "../Components/TopNav";
import Food from "../foods.json";
import { useSelector, useDispatch } from "react-redux";
import { saveAllFoods } from "../Redux/Reducer/Food.reducer";

export default function RestaurantDetails() {
  const { data, isLoading } = useSelector((state) => state.food);
  const dispatcher = useDispatch();

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  function fetchData() {
    const { data = [] } = Food;
    dispatcher(saveAllFoods(data));
  }

  return (
    <div>
      <TopNav />
      <div id="food-card-list">
        {data.length > 0 ? (
          data.map((d, i) => <FoodCard key={`food-card-item-${i}`} data={d} />)
        ) : (
          <p>No Food Found</p>
        )}
      </div>
    </div>
  );
}
