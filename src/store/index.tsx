import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import barcaSlice from "./slices/barca/barcaSlice";
import authSlice from "./slices/auth/authSlice";
import newsSlice from "./slices/news/newsSlice";
import newsViewSlice from "./slices/news/newsViewSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  barca: barcaSlice,
  news: newsSlice,
  newsView: newsViewSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
