import { Filial } from "@models/project";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Links } from "@enums/links";
import styles from "./projectCardBig.module.scss";

export const ProjectCardBig = ({
  details,
  soon,
}: {
  details: Filial;
  soon?: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const { route, image, title } = details;

  return (
    <Link to={route} target="_blank" className={styles.card}>
      <img src={image} alt="" className={styles.img} />
      {soon && (
        <div className={styles.soon}>
          <div className={styles.content}>
            <img src={Links.clock} alt="" loading="lazy" />
            <div>{t("newProject.soon")}</div>
          </div>
        </div>
      )}
      <div
        className={styles.title}
        style={i18n.language === "ky" ? { maxWidth: "24rem" } : {}}
      >
        {title}
      </div>
      <div className={styles.gradient} />
    </Link>
  );
};
