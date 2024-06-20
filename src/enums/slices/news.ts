import { IBanner, IVideo } from "./interfaces";

export type NewsType = "bishkek" | "jalal-abad" | "common" | "jalgroup";
export type NewsColor = "light" | "dark";

export interface INews {
  id: number;
  title: string;
  description: string;
  newsDate?: string;
  text: string;
  color: NewsColor;
  news_type: NewsType;
  images: string[];
  banners?: IBanner;
  videos?: IVideo;
  createdAt: string;
  updatedAt: string;
}
