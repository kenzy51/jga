/* eslint-disable react/destructuring-assignment */
import React from "react";

import { Modal, ModalProps } from "antd";

import { useTranslation } from "react-i18next";
import styles from "./VacancieModal.module.scss";

type PropsType = ModalProps & { subtitle?: string };

export const VacancieModal: React.FC<PropsType> = (props) => {
  const { t } = useTranslation();
  return (
    <Modal className={styles.modal} {...props}>
      <div className={styles.textBlock}>
        <div className={styles.title}>{t("vacancies.otclick")}</div>
        <div className={styles.desc}>{t("vacancies.desc")}</div>
      </div>
      {props.subtitle && (
        <span className={styles.subheader}>{props.subtitle}</span>
      )}
      {props.children}
    </Modal>
  );
};
