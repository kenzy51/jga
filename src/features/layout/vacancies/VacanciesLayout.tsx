import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { getVacancie } from "@store/slices";
import { useAppSelector } from "@hooks/useAppSelector";
import { getVacanciesSelector } from "@store/selectors";
import { generatePath, useNavigate } from "react-router-dom";
import { Button, Skeleton } from "antd";
import { ContainerUI } from "@ui-kit/container";
import { Routes } from "@enums/routes";
import styles from "./VacanciesLayout.module.scss";

const LIMIT = 10;

export const VacanciesLayout = () => {
  const { t, i18n } = useTranslation();
  const [skip, setSkip] = useState<number>(0);
  const { items, loading, amount } = useAppSelector(getVacanciesSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getVacancie({
        skip,
        limit: LIMIT,
        vacancy_type: "jalgroup",
      })
    );
  }, [skip]);

  const loadVacancies = () => {
    setSkip(skip + LIMIT);
  };

  const onVacancy = (id: string) => {
    navigate(
      generatePath(Routes.VACANCY_ID, {
        id,
      })
    );
  };

  if (loading && !items.length) {
    return (
      <ContainerUI>
        <div className={styles.vacancies}>
          <h1 className={styles.heading}>{t("vacancies.title")}</h1>
          <div className={styles.vacanciesList}>
            <div className={styles.vacancy}>
              <Skeleton active title={false} />
              <span className={styles.line} />
              <Skeleton active />
              <span className={styles.line} />
              <Skeleton active paragraph={false} />
            </div>
          </div>
        </div>
      </ContainerUI>
    );
  }

  if (!loading && !items.length) {
    return (
      <ContainerUI>
        <div className={styles.vacancies}>
          <h1 className={styles.heading}>{t("vacancies.title")}</h1>
          <div className={styles.empty}>{t("vacancies.empty")}</div>
        </div>
      </ContainerUI>
    );
  }

  return (
    <ContainerUI>
      <div className={styles.vacancies}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("vacancies.title")}
        </motion.h1>
        <div className={styles.vacanciesList}>
          {items.map((vacancy, index) => (
            <motion.div
              key={vacancy.id}
              className={styles.vacancy}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.title}>{vacancy.title}</h3>
              <span className={styles.line} />
              <div className={styles.desc}>{vacancy.description}</div>
              <span className={styles.line} />
              <div className={styles.price}>
                {i18n.language !== "ky" && t("vacancies.from")}{" "}
                {vacancy.min_salary} {t("vacancyDetails.som")}{" "}
                {i18n.language === "ky" && t("vacancies.from")}
              </div>
              <Button
                className={styles.btn}
                onClick={() => onVacancy(vacancy.id.toString())}
              >
                {t("vacancies.btnDetail")}
              </Button>
            </motion.div>
          ))}
          {amount > items.length && (
            <Button
              className={styles.loadBtn}
              loading={loading}
              disabled={loading}
              onClick={loadVacancies}
            >
              {t("vacancies.btnMore")}
            </Button>
          )}
        </div>
      </div>
    </ContainerUI>
  );
};
