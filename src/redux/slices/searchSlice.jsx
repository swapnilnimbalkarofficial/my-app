import { createSlice } from "@reduxjs/toolkit";
// Define the initial state using that type
const initialState = {
  movieName: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    searchMovie: function (state, action) {
      console.log("SearchMovie Called", action);
      state.movieName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchMovie } = searchSlice.actions;

export default searchSlice.reducer;
