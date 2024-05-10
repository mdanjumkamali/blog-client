import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentByIdThunk } from "../thunks/comment.thunk";
import { comment } from "@/interfaces/comment.interface";

export interface CommentState {
  comments: comment[];
  loading: boolean;
  error?: string;
}

const initialState: CommentState = {
  comments: [],
  loading: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<comment>) => {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(commentByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        commentByIdThunk.fulfilled,
        (state, action: PayloadAction<comment[]>) => {
          state.loading = false;
          state.comments = action.payload;
        }
      )
      .addCase(
        commentByIdThunk.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
