import { Link } from "react-router-dom";
import { Links } from "@enums/links";
import { useTranslation } from "react-i18next";
import { Project } from "@models/project";
import styles from "./Card.module.scss";

export const Card = ({ details }: { details: Project }) => {
  const { id, route, image, soon, title } = details;
  const { t } = useTranslation();

  return (
    <Link to={route} className={styles.card}>
      {Array.isArray(image) ? (
        <picture>
          <source srcSet={image[1]} media="(max-width: 767px)" />
          <source srcSet={image[0]} media="(min-width: 768px)" />
          <img src={image[0]} alt="" className={styles.img} loading="lazy" />
        </picture>
      ) : (
        <img src={image} alt="" className={styles.img} loading="lazy" />
      )}
      <div className={styles.ex}>{id}</div>
      {soon && (
        <div className={styles.soon}>
          <div className={styles.content}>
            <img src={Links.clock} alt="clock" loading="lazy" />
            <div>{t("newProject.soon")}</div>
          </div>
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <img
        src={Links.arrowTime}
        alt="arrow"
        className={styles.arrow}
        loading="lazy"
      />
    </Link>
  );
};
