/* eslint-disable camelcase */
import { Link, generatePath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IFinReport } from "@enums/slices";
import { Routes } from "@enums/routes";
import styles from "./FinReportCard.module.scss";

export const FinReportCard = (props: IFinReport) => {
  const { id, title, quarter_type, year } = props;
  const { t } = useTranslation();

  return (
    <Link
      to={generatePath(Routes.FIN_REPORT, { id: id.toString() })}
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{`${quarter_type} ${t(
          "finReport.quarter"
        )} ${year}`}</div>
      </div>
    </Link>
  );
};
