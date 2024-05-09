import { Post } from "@/interfaces/post.interface";
import {
  createPostService,
  getPostByIdService,
  getPostService,
} from "@/services/post.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost } from "../slices/post.slice";

export const fetchPostsThunk = createAsyncThunk(
  "post/fetch",
  async (_, thunkAPI) => {
    try {
      const posts = await getPostService();

      if (Array.isArray(posts)) {
        return posts;
      }

      throw new Error("Unexpected response format");
    } catch (error) {
      let errorMessage = "An error occurred"; // Default message

      if (error instanceof Error) {
        errorMessage = error.message; // Extract the actual message
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const createPostThunk = createAsyncThunk(
  "post/create",
  async (input: Post, thunkAPI) => {
    try {
      const newPost = {
        ...input,
      };

      const post = await createPostService(newPost);
      thunkAPI.dispatch(addPost(post));
    } catch (error) {
      let errorMessage = "An error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const postByIdThunk = createAsyncThunk(
  "post/fetchById",
  async (id: string, thunkAPI) => {
    try {
      const post = await getPostByIdService(id);

      if (post) {
        return post;
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
