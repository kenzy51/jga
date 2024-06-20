/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { ContainerUI } from "@ui-kit/container";
import { Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { getFinReports } from "@store/slices";
import { getFinReportsSelector } from "@store/selectors";
import { useAppSelector } from "@hooks/useAppSelector";
import { FinReportTypes, QuarterTypes } from "@enums/slices";
import styles from "./FinReport.module.scss";
import { FinReportCard } from "./finReportCard";

const { Option } = Select;

const generateYears = (startYear: number, endYear: number) => {
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  ).reverse();
};

const reportType: FinReportTypes[] = ["pdf"];
const quarterType: QuarterTypes[] = ["I", "II", "III", "IV"];

const LIMIT = 3;

export const FinReport = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { reports, loading, amount } = useAppSelector(getFinReportsSelector);

  const [skip, setSkip] = useState<number>(0);
  const [finreport_type, setReportType] = useState<FinReportTypes>("pdf");
  const [quarter_type, setQuarterType] = useState<QuarterTypes>("I");
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const years = generateYears(2000, new Date().getFullYear());

  useEffect(() => {
    dispatch(
      getFinReports({ skip, limit: LIMIT, finreport_type, quarter_type, year })
    );
  }, [skip]);

  const onFinReportType = (value: FinReportTypes) => {
    setReportType(value);
  };

  const onQuarterType = (value: QuarterTypes) => {
    setQuarterType(value);
  };

  const onYearChange = (value: number) => {
    setYear(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      getFinReports({
        skip: 0,
        limit: LIMIT,
        finreport_type,
        quarter_type,
        year,
      })
    );
  };

  const loadReports = () => {
    setSkip(skip + LIMIT);
  };

  return (
    <ContainerUI>
      <div className={styles.finReport}>
        <h2 className={styles.heading}>{t("finReport.title")}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Select
            placeholder={t("finReport.selectTypeDoc")}
            className={styles.selectTypes}
            popupClassName={styles.dropdown}
            value={finreport_type}
            onChange={onFinReportType}
          >
            {reportType.map((rt) => (
              <Option key={rt} value={rt}>
                {rt.toUpperCase()}
              </Option>
            ))}
          </Select>
          <Select
            placeholder={t("finReport.selectQuarter")}
            className={styles.selectYears}
            popupClassName={styles.dropdown}
            value={quarter_type}
            onChange={onQuarterType}
          >
            <Option>{t("finReport.allQuarter")}</Option>
            {quarterType.map((qt) => (
              <Option key={qt} value={qt}>
                {`${qt} ${t("finReport.quarter")}`}
              </Option>
            ))}
          </Select>
          <Select
            placeholder={t("finReport.selectYear")}
            className={styles.selectYears}
            popupClassName={styles.dropdown}
            value={year}
            onChange={onYearChange}
          >
            <Option>{t("finReport.allYears")}</Option>
            {years.map((yea) => (
              <Option key={yea} value={yea}>
                {yea}
              </Option>
            ))}
          </Select>
          <Button
            loading={loading && !reports.length}
            type="primary"
            htmlType="submit"
            className={styles.btn}
          >
            {t("finReport.btn")}
          </Button>
        </form>

        {reports.length ? (
          <div className={styles.reportsList}>
            {reports.map((report) => (
              <FinReportCard key={report.id} {...report} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>{t("finReport.notFound")}</div>
        )}
        {amount > reports.length && (
          <Button
            className={styles.loadBtn}
            loading={loading}
            disabled={loading}
            onClick={loadReports}
          >
            {t("finReport.btnMore")}
          </Button>
        )}
      </div>
    </ContainerUI>
  );
};
