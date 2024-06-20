import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ContainerUI } from "@ui-kit/container";
import styles from "./Privacy.module.scss";

export const PrivacyLayout = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContainerUI>
      <div className={styles.privacy}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("footer.navigation.privacy")}</h1>
        </div>
        <iframe
          src={`files/privacyPolicy${i18n.language.toUpperCase() ?? "RU"}.html`}
          title="Privacy Policy"
          width="100%"
          height="600px"
          style={{ height: "80vh" }}
        />
      </div>
    </ContainerUI>
  );
};
