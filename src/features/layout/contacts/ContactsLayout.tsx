import { useTranslation } from "react-i18next";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { URLS_PROJECTS } from "@constants/urls";
import { Links } from "@enums/links";
import { ContainerUI } from "@ui-kit/container";
import styles from "./ContactsLayout.module.scss";

export const ContactsLayout = () => {
  const { t } = useTranslation();

  const defaultState = {
    center: [42.82125296, 74.61363231],
    zoom: 15,
  };

  return (
    <ContainerUI>
      <div className={styles.contacts}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("footer.contacts.title")}</h2>
          <a href={`tel:${URLS_PROJECTS.tel}`} className={styles.number}>
            {URLS_PROJECTS.tel}
          </a>
          <a href={`mailto:${URLS_PROJECTS.mail}`} className={styles.email}>
            {URLS_PROJECTS.mail}
          </a>
          <address className={styles.address}>
            {t("footer.contacts.location")}
          </address>
          <div className={styles.socials}>
            <a href={URLS_PROJECTS.facebook} target="_blank" rel="noreferrer">
              <img src={Links.facebook} alt="" width={24} />
            </a>
            <a href={URLS_PROJECTS.instagram} target="_blank" rel="noreferrer">
              <img src={Links.instagram} alt="" width={24} />
            </a>
          </div>
        </div>
        <div className={styles.mapBlock}>
          <YMaps>
            <Map
              defaultState={defaultState}
              options={{
                minZoom: 2,
              }}
              className={styles.map}
            >
              <Placemark geometry={[42.82125296, 74.61363231]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </ContainerUI>
  );
};
