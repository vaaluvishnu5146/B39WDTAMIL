import { createSlice } from "@reduxjs/toolkit";

export const FoodSlice = createSlice({
  // NAME OF REDUCER
  name: "food",
  // BLUEPRINT FOR DATA STORAE DIN REDUCER
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    saveAllFoods: (state, action) => {
      state.data = action.payload;
    },
  },
});

// GETTING ACTIONS OUT OF SLICE
export const { saveAllFoods } = FoodSlice.actions;
export default FoodSlice.reducer;
