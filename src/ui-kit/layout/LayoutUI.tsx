import React from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { Routes } from "@enums/routes";
import styles from "./LayoutUI.module.scss";

type PropsTypes = {
  children: React.ReactNode;
};

const paths: string[] = [
  Routes.PROJECTS,
  Routes.VACANCIES,
  Routes.VACANCY_ID,
  Routes.CONTACTS,
  Routes.MFC,
  Routes.ACADEMY,
];

export const LayoutUI: React.FC<PropsTypes> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div
      className={cn(styles.layout, {
        [styles.dark]: paths.includes(pathname.replace(/\/+$/, "")),
      })}
    >
      {children}
    </div>
  );
};
