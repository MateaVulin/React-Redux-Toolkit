import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
};
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typecode.com/posts");
  return await res.json();
};

export const fetchPosts = (create = createAsyncThunk(
  "posts/fetch",
  async () => {
    return await getPosts;
  }
));
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postsList = action.payload;
    });
  },
});
//export const { getPostsFetch, getPostsSucess } = post.Slices.actions;
export default postsSlice.reducer;
