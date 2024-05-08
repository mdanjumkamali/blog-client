import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/interfaces/post.interface";
import { fetchPostsThunk } from "@/redux/thunks/post.thunk";

interface PostState {
  posts: Post[];
  loading: boolean;
  error?: string;
}

const initialState: PostState = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPostsThunk.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          state.loading = false;
          state.posts = action.payload;
        }
      )
      .addCase(
        fetchPostsThunk.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
