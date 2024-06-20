import { Project } from "@models/project";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Links } from "@enums/links";
import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({ details }: { details: Project }) => {
  const { id, route, image, soon, title } = details;
  const { t } = useTranslation();

  return (
    <Link to={route} target="_blank" className={styles.card}>
      {Array.isArray(image) ? (
        <picture>
          <source srcSet={image[1]} media="(max-width: 767px)" />
          <source srcSet={image[0]} media="(min-width: 768px)" />
          <img src={image[0]} alt="" className={styles.img} />
        </picture>
      ) : (
        <img src={image} alt="" className={styles.img} />
      )}
      <div className={styles.ex}>{id}</div>
      {soon && (
        <div className={styles.soon}>
          <div className={styles.content}>
            <img src={Links.clock} alt="" />
            <div>{t("newProject.soon")}</div>
          </div>
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <img src={Links.arrowTime} alt="" className={styles.arrow} />
    </Link>
  );
};
