import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { ContainerUI } from "@ui-kit/container";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { getFinReportSelector } from "@store/selectors";
import { getFinReport } from "@store/slices";
import { Routes } from "@enums/routes";
import { Loader } from "@ui-kit/loader";
import styles from "./FinReportLayout.module.scss";

export const FinReportLayout = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { report, loading } = useAppSelector(getFinReportSelector);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id) {
      dispatch(getFinReport(id));
    }
  }, [id]);

  if (!loading && !report) {
    navigate(Routes.NOT_FOUND);
    return null;
  }

  return (
    <div className={styles.block}>
      <div className={styles.banner}>
        <div className={cn(styles.imageContainer, styles.notBanner)}>
          <ContainerUI>
            <div className={styles.btnBlock}>
              <button type="button" onClick={() => navigate(-1)}>
                <span className={styles.arrow} />
                {t("finReport.btnBack")}
              </button>
            </div>
          </ContainerUI>
        </div>
      </div>
      <ContainerUI>
        {loading ? (
          <div className={styles.loading}>
            <Loader />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h1 className={styles.title}>{report?.title}</h1>
              <div className={styles.date}>
                {`${report?.quarter_type} ${t("finReport.quarter")} ${
                  report?.year
                }`}
              </div>
            </div>
            <div style={{ height: "80vh", overflow: "hidden" }}>
              <div className={styles.finReportMob}>
                <div className={styles.contentMob}>
                  <h3>{report?.title}</h3>
                  <a
                    href={report?.url}
                    download={report?.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("finReport.btnOpen")}
                  </a>
                </div>
              </div>
              <iframe
                src={report?.url}
                className={styles.frame}
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
          </div>
        )}
      </ContainerUI>
    </div>
  );
};
