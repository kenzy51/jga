import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { getNewsSelector } from "@store/selectors/news";
import { getNews } from "@store/slices";
import { ContainerUI } from "@ui-kit/container";
import { CardsGroup, CardsLoading } from "./components";
import styles from "./News.module.scss";

const LIMIT = 9;

export const NewsLayout = () => {
  const { t } = useTranslation();
  const [skip, setSkip] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { news, loading, totalCount } = useAppSelector(getNewsSelector);

  useEffect(() => {
    dispatch(
      getNews({
        // news_type: "common",
        skip,
        limit: LIMIT,
      })
    );
  }, [skip]);

  const loadNews = () => {
    setSkip(skip + LIMIT);
  };

  if (loading && !news.length) {
    return (
      <ContainerUI>
        <h1 className={styles.title}>{t("news.title")}</h1>
        <CardsLoading />
      </ContainerUI>
    );
  }

  if (!loading && !news.length) {
    return (
      <ContainerUI>
        <h1 className={styles.title}>{t("news.title")}</h1>
        <div className={styles.empty}>{t("news.empty")}</div>
      </ContainerUI>
    );
  }

  return (
    <ContainerUI>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("news.title")}
      </motion.h1>
      <CardsGroup news={news} />
      {totalCount / 3 > news.length && (
        <Button
          className={styles.loadBtn}
          loading={loading}
          disabled={loading}
          onClick={loadNews}
        >
          {t("news.btn")}
        </Button>
      )}
    </ContainerUI>
  );
};
