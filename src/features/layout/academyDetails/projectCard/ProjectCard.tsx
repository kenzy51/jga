import { Filial } from "@models/project";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Links } from "@enums/links";
import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({
  details,
  soon,
}: {
  details: Filial;
  soon?: boolean;
}) => {
  const { t } = useTranslation();
  const { route, image, title } = details;

  return (
    <Link to={route} target="_blank" className={styles.card}>
      <img src={image} alt="" className={styles.img} loading="lazy" />
      {soon && (
        <div className={styles.soon}>
          <div className={styles.content}>
            <img src={Links.clock} alt="" />
            <div>{t("newProject.soon")}</div>
          </div>
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.gradient} />
    </Link>
  );
};
