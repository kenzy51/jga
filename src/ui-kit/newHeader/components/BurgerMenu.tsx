/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageSelector } from "@ui-kit/selectors";
import { Links } from "@enums/links";
// eslint-disable-next-line import/no-cycle
import { getHeaderLinks } from "../NewHeader";

import styles from "./burgermenu.module.scss";

const HeaderList = ({ onCancel }: any) => {
  const headerLinks = getHeaderLinks();

  return (
    <div className={styles.list}>
      <ul className={styles.listUl}>
        {headerLinks.map((item) => (
          <li key={item.label} onClick={onCancel}>
            <Link to={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BurgerMenu = ({ isOpen, onCancel }: any) => {
  return (
    <motion.div
      className={styles.burger}
      initial={{ y: "-2%", opacity: 0 }}
      animate={{ y: isOpen ? "0%" : "-2%", opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: "-3%", opacity: 0 }}
    >
      <div className={styles.topContent}>
        <img src={Links.jalGroup} width={68} height={24} alt="" />
        <img src={Links.closeIcon} alt="" onClick={onCancel} />
      </div>
      <HeaderList onCancel={onCancel} />
      <div className={styles.language}>
        <LanguageSelector isText={false} />
      </div>
    </motion.div>
  );
};

export default BurgerMenu;
