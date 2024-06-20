import React from "react";
import { INews } from "@enums/slices";
import styles from "../../News.module.scss";
import { CardUI } from "../CardUI";

type PropsTypes = {
  news: INews[][];
};

export const CardsGroup: React.FC<PropsTypes> = ({ news }) => {
  return (
    <div className={styles.newsList}>
      {news.map((item, index) => {
        const newsOne = item[0];
        const newsTwo = item[1];
        const newsThree = item[2];

        return (
          <div key={item[0].id} className={styles.newsGroup}>
            <div
              className={styles.bigNews}
              style={{ order: index % 2 === 0 ? 0 : 1 }}
            >
              <CardUI
                banner={newsOne.banners?.banner}
                date={newsOne.newsDate || newsOne.updatedAt}
                {...newsOne}
              />
            </div>
            <div className={styles.smallNews}>
              {newsTwo && (
                <CardUI
                  banner={newsTwo.banners?.banner}
                  date={newsTwo.newsDate || newsTwo.updatedAt}
                  {...newsTwo}
                />
              )}
              {newsThree && (
                <CardUI
                  banner={newsThree.banners?.banner}
                  date={newsThree.newsDate || newsThree.updatedAt}
                  {...newsThree}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
