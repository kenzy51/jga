import { AuthApi } from "@constants/api";
import { SliceConstants, SliceName } from "@constants/slices";
import { INews, NewsType } from "@enums/slices/news";
import { mapNews } from "@mappers/news";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $api from "@utils/axios";

interface INewsState {
  loading: boolean;
  error?: string;
  totalCount: number;
  news: INews[][];
}

interface IGetNewsParams {
  news_type?: NewsType;
  skip?: number;
  limit?: number;
}

const initialState: INewsState = {
  loading: false,
  news: [],
  totalCount: 0,
  error: undefined,
};

export const getNews = createAsyncThunk(
  SliceConstants.GetNews,
  async (params: IGetNewsParams, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(`${AuthApi.News}`, {
        params,
      });
      return { list: mapNews(data.items), totalCount: data.amount };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const newsSlice = createSlice({
  name: SliceName.News,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNews.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getNews.fulfilled, (state, { payload, meta }) => {
      const { skip } = meta.arg;
      return {
        ...state,
        loading: false,
        news:
          (skip || 0) === 0 ? payload.list : [...state.news, ...payload.list],
        totalCount: payload.totalCount,
      };
    });
    builder.addCase(getNews.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default newsSlice.reducer;
