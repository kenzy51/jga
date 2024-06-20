import React, { ReactNode } from "react";
import styles from "./ContainerUI.module.scss";

interface IChildren {
  children: ReactNode;
}
export const ContainerUI = ({ children }: IChildren) => {
  return <div className={styles.container}>{children}</div>;
};
