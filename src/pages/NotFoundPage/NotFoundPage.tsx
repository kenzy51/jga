/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Routes } from "@enums/routes";
import { ContainerUI } from "@ui-kit/container";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={cn(styles.notFound)}>
      <ContainerUI>
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>404</h2>
          <div className={styles.desc}>{t("notFound.desc")}</div>
          <Button onClick={() => navigate(Routes.MAIN)} className={styles.btn}>
            {t("notFound.btn")}
          </Button>
        </div>
      </ContainerUI>
    </div>
  );
};
