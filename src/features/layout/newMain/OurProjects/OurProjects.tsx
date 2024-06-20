import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Routes } from "@enums/routes";
import { Links } from "@enums/links";
import { ContainerUI } from "@ui-kit/container";
import styles from "./ourProjects.module.scss";
import { Card, CardQuote } from "./components";

const CardBlockList = () => {
  const { t } = useTranslation();

  const arrayList = [
    {
      id: "01.",
      route: Routes.ACADEMY,
      image: Links.academyMobile,
      title: t("newProject.jal"),
      soon: false,
    },
    {
      id: "02.",
      route: Routes.ACADEMY,
      image: Links.teamMobile,
      title: t("newProject.bish"),
      soon: true,
    },
    {
      id: "03.",
      route: Routes.MFC,
      image: Links.mfcMobile,
      title: t("newProject.mfc"),
      soon: true,
    },
  ];

  return (
    <div className={styles.list}>
      {arrayList.map((item) => (
        <Card details={item} key={item.id} />
      ))}
    </div>
  );
};

export const OurProjects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div className={styles.ourProjects}>
        <ContainerUI>
          <motion.div
            className={styles.top}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h2>{t("newProject.title")}</h2>
            <p>{t("newProject.desc")}</p>
          </motion.div>
          <CardBlockList />
          <CardQuote />
        </ContainerUI>
      </div>
    </div>
  );
};
