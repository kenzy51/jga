/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Links } from "@enums/links";
import { Routes } from "@enums/routes";
import { LanguageSelector } from "@ui-kit/selectors";
import useMediaQuery from "@hooks/useMediaQuery";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line import/no-cycle
import BurgerMenu from "./components/BurgerMenu";
import styles from "./NewHeader.module.scss";

export const getHeaderLinks = () => {
  const { t } = useTranslation();
  return [
    { label: t("header.main"), route: Routes.MAIN },
    { label: t("header.title3"), route: Routes.PROJECTS },
    { label: t("header.title2"), route: Routes.NEWS },
    { label: t("header.title4"), route: Routes.VACANCIES },
    { label: t("header.title5"), route: Routes.CONTACTS },
  ];
};

const NewHeader = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("lg");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerLinks = getHeaderLinks();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateMain = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.leftBlock}>
          <div>
            <img
              src={Links.jalGroup}
              alt=""
              width={68}
              height={24}
              onClick={navigateMain}
              className={styles.logo}
            />
          </div>
          {!isDesktop && (
            <div className={styles.headerItems}>
              {headerLinks.map((item) => (
                <NavLink
                  to={item.route}
                  key={item.label}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        {!isDesktop && (
          <div className={styles.languageSelector}>
            <LanguageSelector isText />
          </div>
        )}
        {isDesktop && (
          <motion.img
            src={Links.menuIcon}
            width={32}
            alt="menu"
            onClick={toggleMenu}
          />
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && <BurgerMenu isOpen={isMenuOpen} onCancel={toggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default NewHeader;
