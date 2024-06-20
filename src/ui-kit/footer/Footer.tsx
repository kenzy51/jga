import { useTranslation } from "react-i18next";
import { Links } from "@enums/links";
import { Link } from "react-router-dom";
import { Routes } from "@enums/routes";
import { ContainerUI } from "@ui-kit/container";
import { URLS_PROJECTS } from "@constants/urls";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <ContainerUI>
        <div className={styles.footerInner}>
          <div className={styles.left}>
            <img src={Links.footer} alt="" width={113} />
            <div className={styles.called}>Jal Group Asia. 2024.</div>
            <Link to={Routes.PRIVACY} className={styles.link}>
              {t("footer.navigation.privacy")}
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.block}>
              <h2 className={styles.title}>{t("footer.projects.title")}</h2>
              <Link
                to={`${URLS_PROJECTS.experience}/jalal-abad`}
                target="_blank"
                className={styles.link}
              >
                {t("footer.projects.academyJ")}
              </Link>
              <Link
                to={`${URLS_PROJECTS.experience}/bishkek`}
                target="_blank"
                className={styles.link}
              >
                {t("footer.projects.academyB")}
              </Link>
              <Link to={Routes.MFC} target="_blank" className={styles.link}>
                {t("footer.projects.complex")}
              </Link>
            </div>
            <div className={styles.block}>
              <h2 className={styles.title}>{t("footer.navigation.title")}</h2>
              <div className={styles.linksBlock}>
                <div className={styles.links}>
                  <Link to={Routes.MAIN} className={styles.link}>
                    {t("footer.navigation.home")}
                  </Link>
                  <Link to={Routes.PROJECTS} className={styles.link}>
                    {t("footer.navigation.projects")}
                  </Link>
                  <Link to={Routes.NEWS} className={styles.link}>
                    {t("footer.navigation.news")}
                  </Link>
                </div>
                <div className={styles.links}>
                  <Link to={Routes.VACANCIES} className={styles.link}>
                    {t("footer.navigation.vacancies")}
                  </Link>
                  <Link to={Routes.CONTACTS} className={styles.link}>
                    {t("footer.navigation.contacts")}
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.title}>{t("footer.contacts.title")}</h2>
              <a
                href={`mailto:${URLS_PROJECTS.mail}`}
                className={styles.called}
              >
                {URLS_PROJECTS.mail}
              </a>
              <address className={styles.address}>
                {t("footer.contacts.location")}
              </address>
              <div className={styles.socials}>
                <a
                  href={URLS_PROJECTS.facebook}
                  target="_blank"
                  className={styles.social}
                  rel="noreferrer"
                >
                  <img src={Links.facebook} alt="" width={24} />
                </a>
                <a
                  href={URLS_PROJECTS.instagram}
                  target="_blank"
                  className={styles.social}
                  rel="noreferrer"
                >
                  <img src={Links.instagram} alt="" width={24} />
                </a>
              </div>
            </div>
            <div className={styles.mobile}>
              <div className={styles.called}>Jal Group Asia. 2024.</div>
              <Link to={Routes.PRIVACY} className={styles.link}>
                {t("footer.navigation.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </ContainerUI>
    </div>
  );
};
