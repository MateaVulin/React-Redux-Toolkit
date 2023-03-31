import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    isLoading: false,
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSucess: (state, action) => {
      state.postLists = action.payload;
      state.isLoading = false;
    },
  },
});
export const { getPostsFetch, getPostsSucess } = post.Slices.actions;
export default postsSlice.reducer;
