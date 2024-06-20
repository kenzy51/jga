import { RootState } from "@store/index";

export const getNewsSelector = (state: RootState) => state.news;
export const getNewsViewSelector = (state: RootState) => state.newsView;
