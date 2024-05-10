import { comment } from "@/interfaces/comment.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { addComment } from "../slices/comment.slice";
import {
  createCommentService,
  fetchCommentsService,
} from "@/services/comment.service";

export const commentByIdThunk = createAsyncThunk(
  "comment/fetchById",
  async (id: string, thunkAPI) => {
    try {
      const comment = await fetchCommentsService(id);

      if (comment) {
        return comment;
      }

      throw new Error("Unexpected response format");
    } catch (error) {
      let errorMessage = "An error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const createCommentThunk = createAsyncThunk(
  "comment/create",
  async (input: comment, thunkAPI) => {
    try {
      const newComment = {
        text: input.text,
        postId: input.postId,
      };

      const comment = await createCommentService(newComment, input.postId);
      thunkAPI.dispatch(addComment(comment));
    } catch (error) {
      let errorMessage = "An error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
