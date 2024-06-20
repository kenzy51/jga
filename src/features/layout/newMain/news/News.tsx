/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from "react";
import { ContainerUI } from "@ui-kit/container";
import { CardsGroup, CardsLoading } from "@features/layout/news/components";
import { useNavigate } from "react-router-dom";
import { Routes } from "@enums/routes";
import { useAppSelector } from "@hooks/useAppSelector";
import { getNewsSelector } from "@store/selectors/news";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { getNews } from "@store/slices";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./News.module.scss";

export const News = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { news, loading } = useAppSelector(getNewsSelector);

  useEffect(() => {
    dispatch(
      getNews({
        // news_type: "common",
        limit: 9,
      })
    );
  }, []);

  const navigateTo = () => {
    navigate(Routes.NEWS);
  };

  if (!loading && !news.length) {
    return null;
  }

  return (
    <ContainerUI>
      <div className={styles.header}>
        <h2 className={styles.heading}>{t("footer.navigation.news")}</h2>
        <div className={styles.btn} onClick={navigateTo}>
          {t("news.btnSeeAll")} <span className={styles.arrow} />
        </div>
      </div>
      {loading ? <CardsLoading /> : <CardsGroup news={news} />}
      <Button className={styles.loadBtn} onClick={navigateTo}>
        {t("news.btnSeeAll")}
      </Button>
    </ContainerUI>
  );
};
