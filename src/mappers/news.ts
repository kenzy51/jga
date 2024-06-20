import { INews } from "@enums/slices/news";

const formatDate = (time: string) => {
  const date = new Date(time);

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const mapNews = (news: INews[]): INews[][] => {
  const formatterNews = news.map(
    ({ updatedAt: at, newsDate: time, ...items }) => {
      const updatedAt = formatDate(at);
      const newsDate = time ? formatDate(time) : "";

      return {
        ...items,
        banners: items.banners
          ? {
              ...items.banners,
              createdAt: formatDate(items.banners.createdAt),
              updatedAt: formatDate(items.banners.updatedAt),
            }
          : undefined,
        updatedAt,
        newsDate,
      };
    }
  );

  return Array.from(
    { length: Math.ceil(formatterNews.length / 3) },
    (_, index) => formatterNews.slice(index * 3, index * 3 + 3)
  );
};

export const mapNewsView = ({
  createdAt,
  updatedAt,
  newsDate: time,
  ...news
}: INews): INews => {
  return {
    ...news,
    banners: news.banners
      ? {
          ...news.banners,
          createdAt: formatDate(news.banners.createdAt),
          updatedAt: formatDate(news.banners.updatedAt),
        }
      : undefined,
    createdAt: formatDate(createdAt),
    updatedAt: formatDate(updatedAt),
    newsDate: time ? formatDate(time) : "",
  };
};
