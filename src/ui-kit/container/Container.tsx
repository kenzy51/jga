import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IChildren {
  children: ReactNode;
}
const Container = ({ children }: IChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
