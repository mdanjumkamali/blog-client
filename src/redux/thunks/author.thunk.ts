import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthor } from "../slices/author.slice";
import { getAuthorService } from "@/services/author.service";

export const fetchAuthorThunk = createAsyncThunk(
  "user/fetchUserName",
  async (id: string, thunkAPI) => {
    const data = await getAuthorService(id);
    thunkAPI.dispatch(setAuthor(data));
  }
);
