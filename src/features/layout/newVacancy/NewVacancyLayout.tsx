import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import cn from "classnames";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { getVacancieById } from "@store/slices";
import { ContainerUI } from "@ui-kit/container";
import { getLoadingSelector, getVacancieByIdSelector } from "@store/selectors";
import { RoutePath } from "@router/routePath";
import { Links } from "@enums/links";
import { Loader } from "@ui-kit/loader";
import {
  VacancyEmploymentTypes,
  VacancyExperienceTypes,
  VacancyWorkTypes,
} from "@enums/slices";
import { Routes } from "@enums/routes";
import { LocalStorage } from "@localStorage/localStorage";
import { LocalStorageKey } from "@enums/localStorage";
import { AboutCardBig } from "./aboutCardBig/AboutCard";
import { ResponseModal } from "../vacancies/components";
import styles from "./NewVacancyLayout.module.scss";

export const NewVacancyViewLayout = () => {
  const [isModalResponse, setModalResponse] = useState(false);
  const [vacancyIds, setVacancyIds] = useState<Record<string, boolean> | any>(
    {}
  );
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const vacancies = useAppSelector(getVacancieByIdSelector);
  const loading = useAppSelector(getLoadingSelector);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    if (id) {
      dispatch(getVacancieById({ id }));

      let vacancyKey = {};
      const storedData = LocalStorage.getItem(LocalStorageKey.VacancyIds);

      if (storedData) {
        try {
          vacancyKey = JSON.parse(storedData);
          setVacancyIds(vacancyKey);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);

  const experience: Record<VacancyExperienceTypes, string> = {
    none: t("vacancies.none"),
    "less-one": t("vacancies.lessOne"),
    one_three: t("vacancies.oneThree"),
    three_six: t("vacancies.three_six"),
  };

  const employment: Record<VacancyEmploymentTypes, string> = {
    "full-time": t("vacancies.fullTime"),
    "part-time": t("vacancies.partTile"),
  };

  const workType: Record<VacancyWorkTypes, string> = {
    remote: t("vacancies.remoteWork"),
    office: t("vacancies.officeWork"),
  };

  const onShow = () => {
    // e.stopPropagation();
    setModalResponse(true);
  };

  const onClose = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    localStorage.removeItem(LocalStorage.VacancyIds);
    setModalResponse(false);
  };

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loading}>
          <Loader fixed />
        </div>
      </div>
    );
  }

  if (!vacancies) {
    navigate(Routes.NOT_FOUND);
    return null;
  }

  return (
    <>
      <ContainerUI>
        <div className={styles.wrapper}>
          <div
            className={styles.soon}
            onClick={() => navigate(RoutePath.vacancies)}
            tabIndex={0}
            role="button"
          >
            <img src={Links.whiteArrow} alt="" />
            <p>{t("vacancyDetails.back")}</p>
          </div>
          <div className={styles.header}>
            <h1 className={styles.title}>{vacancies.title}</h1>
            {!vacancyIds[vacancies.id] ? (
              <Button onClick={onShow} className={styles.btn}>
                {t("vacancies.btnFollow")}
              </Button>
            ) : (
              <Button
                className={cn(styles.btn, {
                  [styles.clicked]: vacancyIds[vacancies.id],
                })}
                disabled
              >
                {t("vacancies.btnFollowYet")}
              </Button>
            )}
          </div>
          <div className={styles.infoBlock}>
            <AboutCardBig
              data={{
                title: `${
                  i18n.language !== "ky" ? t("vacancyDetails.from") : ""
                } ${vacancies.min_salary} ${t("vacancyDetails.som")} ${
                  i18n.language === "ky" ? t("vacancies.from") : ""
                }`,
                text: t("vacancyDetails.salary"),
              }}
            />
            <AboutCardBig
              data={{
                title: employment[vacancies.employment],
                text: t("vacancyDetails.employment"),
              }}
            />
            <AboutCardBig
              data={{
                title: workType[vacancies.work_type],
                text: t("vacancyDetails.format"),
              }}
            />
          </div>
          {!vacancyIds[vacancies.id] ? (
            <Button onClick={onShow} className={styles.btn}>
              {t("vacancies.btnFollow")}
            </Button>
          ) : (
            <Button
              className={cn(styles.btn, {
                [styles.clicked]: vacancyIds[vacancies.id],
              })}
              disabled
            >
              {t("vacancies.btnFollowYet")}
            </Button>
          )}
          <div className={styles.content}>
            <div className={styles.text}>{t("vacancyDetails.desc")}</div>
            <p className={styles.desc}>{vacancies.description}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>{t("vacancies.condition")}</div>
            <p className={styles.desc}>{vacancies.work_conditions}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>{t("vacancyDetails.come")}</div>
            <p className={styles.desc}>{vacancies.skills}</p>
          </div>
        </div>
      </ContainerUI>
      <ResponseModal
        open={isModalResponse}
        onClose={onClose}
        currentVacancy={vacancies && vacancies}
        vacancyIds={vacancyIds}
        setVacancyIds={setVacancyIds}
      />
    </>
  );
};
