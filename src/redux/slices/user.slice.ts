import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  avatar: string;
  id: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  avatar: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
