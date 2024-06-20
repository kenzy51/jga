import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { getVacancieById } from "@store/slices";
import { useAppSelector } from "@hooks/useAppSelector";
import { getLoadingSelector, getVacancieByIdSelector } from "@store/selectors";
import { Loader } from "@ui-kit/loader";
import { Button } from "antd";
import cn from "classnames";
import {
  IVacancies,
  VacancyEmploymentTypes,
  VacancyExperienceTypes,
  VacancyWorkTypes,
} from "@enums/slices";
import { LocalStorage } from "@localStorage/localStorage";
import { CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Routes } from "@enums/routes";
import styles from "./VacancyViewLayout.module.scss";
import { ResponseModal } from "../vacancies/components";
// import { ResponseModal } from "../vacancies/components";

export const VacancyViewLayout = () => {
  const [isModalResponse, setModalResponse] = useState(false);
  const [currentVacancy, setCurrentVacancy] = useState<IVacancies>();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const vacancies = useAppSelector(getVacancieByIdSelector);
  const loading = useAppSelector(getLoadingSelector);
  const searchString = new URLSearchParams(window.location.search);
  const [vacancyIds, setVacancyIds] = useState<Record<string, boolean> | any>(
    {}
  );
  const id = searchString.get("id");

  useEffect(() => {
    if (id) {
      dispatch(getVacancieById({ id }));
    }
  }, []);

  const convertDate = (dateString: string) => {
    const options: any = { year: "2-digit", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const experience: Record<VacancyExperienceTypes, string> = {
    none: t("vacancie.none"),
    "less-one": t("vacancie.lessOne"),
    one_three: t("vacancie.oneThree"),
    three_six: t("vacancie.three_six"),
  };

  const employment: Record<VacancyEmploymentTypes, string> = {
    "full-time": t("vacancie.fullTime"),
    "part-time": t("vacancie.partTile"),
  };

  const workType: Record<VacancyWorkTypes, string> = {
    remote: t("vacancie.remoteWork"),
    office: t("vacancie.officeWork"),
  };
  const onShow =
    (vacancy?: IVacancies) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setModalResponse(true);
      setCurrentVacancy(vacancy);
    };
  const onClose = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // localStorage.removeItem(LocalStorage.VacancyIds);
    setModalResponse(false);
  };

  if (!vacancies) {
    return (
      <div className={styles.loading}>
        <Loader fixed />
        <CloseCircleFilled
          onClick={() => navigate(Routes.VACANCIES)}
          className={styles.loadingIcon}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {loading && (
        <div className={styles.firstBlock}>
          <Loader fixed />
        </div>
      )}
      <div className={styles.cardList}>
        <div key={vacancies.id} className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>{vacancies.title}</div>
              <div className={styles.salary}>{`${t("vacancie.to")} ${
                vacancies.max_salary
              } KGS`}</div>
            </div>
            <div>
              <div className={styles.date}>
                {convertDate(vacancies.createdAt)}
              </div>
            </div>
          </div>
          <div className={styles.city}>
            {t("vacancie.city")} {vacancies.vacancy_city}
          </div>
          <div className={styles.dateMobile}>
            {convertDate(vacancies.createdAt)}
          </div>
          <div className={styles.experience}>
            {t("vacancie.requiredExp")} {experience[vacancies.experience]}
          </div>
          <div className={styles.desc}>
            {`${employment[vacancies.employment]}, ${
              workType[vacancies.work_type]
            }`}
          </div>
          <Button
            type="primary"
            onClick={onShow()}
            className={cn(styles.btn, {
              [styles.clicked]: vacancies.status !== "active",
            })}
          >
            {vacancies.status === "active"
              ? t("vacancie.btnFollow")
              : t("vacancie.btnFollowYet")}
          </Button>
        </div>
        <div className={styles.aboutWork}>
          <div className={styles.title}>{t("vacancie.aboutUs")}</div>
          <div className={styles.desc2}>{vacancies.description}</div>
          <div className={styles.title}>{t("vacancie.condition")}</div>
          <div className={styles.desc2}>{vacancies.work_conditions}</div>
          <div className={styles.title}>{t("vacancie.skill")}</div>
          <div className={styles.desc2}>{vacancies.skills}</div>
          <div className={styles.title}>{t("vacancie.work")}</div>
          <div className={styles.desc2}>{vacancies.description}</div>
        </div>
      </div>
      <ResponseModal
        open={isModalResponse}
        onClose={onClose}
        currentVacancy={vacancies && vacancies}
        vacancyIds={vacancyIds}
        setVacancyIds={setVacancyIds}
      />
    </div>
  );
};
