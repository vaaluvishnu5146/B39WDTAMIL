import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from "./Reducer/Food.reducer";
import RestaurantReducer from "./Reducer/Restaurant.reducer";
/*
   LIST OF RESTAURANTS
   LIST OF FOODS
*/

export default configureStore({
  reducer: {
    restaurant: RestaurantReducer,
    food: FoodReducer,
  },
});
