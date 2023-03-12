import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
  // NAME OF REDUCER
  name: "restaurant",
  // BLUEPRINT FOR DATA STORAE DIN REDUCER
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    saveAllRestaurants: (state, action) => {
      state.data = action.payload;
    },
  },
});

// GETTING ACTIONS OUT OF SLICE
export const { saveAllRestaurants } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
