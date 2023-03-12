import React, { useState, useEffect } from "react";
import RestaurantsCard from "../Components/RestaurantsCard";
import TopNav from "../Components/TopNav";
import restaurantdata from "../restaurants.json";
import { useSelector, useDispatch } from "react-redux";
import { saveAllRestaurants } from "../Redux/Reducer/Restaurant.reducer";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const route = useNavigate();
  const dispatcher = useDispatch();
  const { data = [], isLoading = false } = useSelector(
    (state) => state.restaurant
  );
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  function fetchData() {
    const { data = [] } = restaurantdata;
    dispatcher(saveAllRestaurants(data));
  }
  return (
    <div>
      <TopNav />
      {data.length > 0 ? (
        data.map((d, i) => (
          <RestaurantsCard
            data={d}
            key={`restaurant-card-${i}`}
            handleClick={() => route("/restaurant/foods")}
          />
        ))
      ) : (
        <p>Sorry no retaurants found</p>
      )}
    </div>
  );
}
