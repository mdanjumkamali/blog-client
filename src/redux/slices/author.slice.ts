import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  avatar: string;
}

const initialState: UserState = {
  name: "",
  avatar: "",
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setAuthor } = authorSlice.actions;
export default authorSlice.reducer;
