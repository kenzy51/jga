/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Input } from "antd";
import styles from "./VacationInput.module.scss";

type VacationInputProps = {
  className?: string;
  inputMode?: string;
  pattern?: string;
  defaultValue?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const VacationInput: React.FC<VacationInputProps> = ({
  className,
  inputMode,
  pattern,
  defaultValue,
  onKeyPress,
  ...rest
}) => {
  return (
    // @ts-ignore
    <Input
      {...rest}
      className={`${styles.input} ${className}`}
      inputMode={inputMode}
      pattern={pattern}
      onKeyPress={onKeyPress}
    />
  );
};

export const VacationTextArea = ({ className, ...rest }: any) => {
  return (
    <Input.TextArea
      rows={8}
      maxLength={750}
      {...rest}
      className={`${styles.input} ${className}`}
    />
  );
};
