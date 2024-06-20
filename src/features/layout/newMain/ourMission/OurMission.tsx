import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutCard } from "@features/layout/mfcDetails/aboutCard";
import { ContainerUI } from "@ui-kit/container";
import styles from "./OurMission.module.scss";

export const OurMission = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutCard = [
    {
      color: "green",
      title: "2",
      text: t("mission.project"),
    },
    {
      color: "blue",
      title: "77",
      text: t("mission.people"),
    },
    {
      color: "red",
      title: t("mission.millions"),
      text: t("mission.invest"),
    },
  ];

  return (
    <div className={styles.mission}>
      <ContainerUI>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          {t("mission.ourMission")}
        </motion.h3>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h1 className={styles.subTitle}>{t("mission.subTitle")}</h1>
          <div className={styles.desc}>
            <div className={styles.text}>{t("mission.desc1")}</div>
            <div className={styles.text}>{t("mission.desc2")}</div>
          </div>
        </motion.div>
        <div className={styles.cardList}>
          {aboutCard.map((item) => (
            <AboutCard data={item} key={item.title} />
          ))}
        </div>
      </ContainerUI>
    </div>
  );
};
