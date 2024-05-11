import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth.slice";
import userReducer from "./slices/user.slice";
import postReducer from "./slices/post.slice";
import commentReducer from "./slices/comment.slice";

const persistConfig: PersistConfig<any> = {
  key: "auth",
  storage,
  whitelist: ["token", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
