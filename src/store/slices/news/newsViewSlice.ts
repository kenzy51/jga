import { AuthApi } from "@constants/api";
import { SliceConstants, SliceName } from "@constants/slices";
import { INews } from "@enums/slices/news";
import { mapNewsView } from "@mappers/news";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $api from "@utils/axios";
import { generatePath } from "react-router-dom";

interface INewsViewState {
  loading: boolean;
  error?: string;
  newsView: INews | null;
}

const initialState: INewsViewState = {
  loading: false,
  newsView: null,
  error: undefined,
};

export const getNewsView = createAsyncThunk(
  SliceConstants.GetNewsView,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(generatePath(AuthApi.NewsID, { id }));

      return {
        newsView: mapNewsView(data.news),
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const newsViewSlice = createSlice({
  name: SliceName.NewsView,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewsView.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getNewsView.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      newsView: payload.newsView,
    }));
    builder.addCase(getNewsView.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default newsViewSlice.reducer;
