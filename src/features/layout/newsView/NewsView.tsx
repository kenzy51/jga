import { useEffect } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@hooks/useAppSelector";
import { getNewsViewSelector } from "@store/selectors/news";
import { getNewsView } from "@store/slices";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { ContainerUI } from "@ui-kit/container";
import { Routes } from "@enums/routes";
import { Loader } from "@ui-kit/loader";
import styles from "./NewsView.module.scss";

export const NewsViewLayout = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { newsView, loading } = useAppSelector(getNewsViewSelector);
  const { banners, title, text, updatedAt, newsDate } = newsView || {};

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id) {
      dispatch(getNewsView(id));
    }
  }, [id]);

  if (!loading && !newsView) {
    navigate(Routes.NOT_FOUND);
    return null;
  }

  return (
    <div className={styles.block}>
      <div className={styles.banner}>
        <div
          className={cn(styles.imageContainer, {
            [styles.notBanner]: !banners?.banner && !loading,
          })}
        >
          {banners?.banner && (
            <>
              <img
                src={banners.banner}
                className={styles.imageBlock}
                alt=""
                loading="lazy"
              />
              <img
                src={banners.banner}
                className={styles.imageBack}
                alt=""
                loading="lazy"
              />
            </>
          )}
          <ContainerUI>
            <div className={styles.btnBlock}>
              <button type="button" onClick={() => navigate(Routes.NEWS)}>
                <span className={styles.arrow} />
                {t("news.btnBack")}
              </button>
            </div>
          </ContainerUI>
        </div>
      </div>
      <ContainerUI>
        <div className={styles.wrapper}>
          {loading && <Loader fixed />}
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.date}>{newsDate || updatedAt}</div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: text || "" }}
          />
        </div>
      </ContainerUI>
    </div>
  );
};
