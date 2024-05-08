import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  avatar: string;
  authorId: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  avatar: "",
  authorId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.authorId = action.payload.authorId;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
