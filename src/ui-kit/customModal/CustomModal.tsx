/* eslint-disable react/destructuring-assignment */
import React from "react";

import { Divider, Modal, ModalProps } from "antd";

import styles from "./CustomModal.module.scss";

type PropsType = ModalProps & { subtitle?: string };

export const CustomModal: React.FC<PropsType> = (props) => {
  return (
    <Modal className={styles.modal} {...props}>
      {props.subtitle && (
        <span className={styles.subheader}>{props.subtitle}</span>
      )}
      {props.children}
    </Modal>
  );
};
