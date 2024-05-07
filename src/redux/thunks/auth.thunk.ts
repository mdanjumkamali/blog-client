import { Signup, Login } from "@/interfaces/auth.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../slices/auth.slice";
import { setUser } from "../slices/user.slice";
import { loginService, signupService } from "../../services/auth.service";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (input: Login, thunkAPI) => {
    const user = await loginService(input);
    thunkAPI.dispatch(login({ token: user.token }));
    thunkAPI.dispatch(setUser(user.user));
  }
);

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (input: Signup, thunkAPI) => {
    const user = await signupService(input);
    thunkAPI.dispatch(login({ token: user.token }));
    thunkAPI.dispatch(setUser(user.user));
  }
);
