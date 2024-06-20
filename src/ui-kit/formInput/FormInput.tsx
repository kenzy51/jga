import React from "react";
import { Input } from "antd";
import styles from "./FormInput.module.scss";

export const FormInput = ({ className, ...rest }: any) => {
  return <Input {...rest} className={`${styles.input} ${className}`} />;
};
