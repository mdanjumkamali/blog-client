import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/interfaces/post.interface";
import { fetchPostsThunk, postByIdThunk } from "@/redux/thunks/post.thunk";

interface PostState {
  posts: Post[];
  selectedPost?: Post;
  loading: boolean;
  error?: string;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  selectedPost: undefined,
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
      )
      .addCase(postByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postByIdThunk.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.loading = false;
          state.selectedPost = action.payload;
        }
      )
      .addCase(postByIdThunk.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
