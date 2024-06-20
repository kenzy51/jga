import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Links } from "@enums/links";
import { ContainerUI } from "@ui-kit/container";
import { Routes } from "@enums/routes";
import { useData } from "./hooks/useData";
import { ProjectCard } from "./projectCard/ProjectCard";
import styles from "./AcademyDetails.module.scss";
import { ProjectCardBig } from "./projectCardBig/projectCardBig";

export const AcademyDetailsLayout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, services } = useData();

  const animate = Array.from({ length: 4 }, () =>
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    })
  );

  return (
    <>
      <div className={styles.background}>
        <div
          className={styles.btnBack}
          onClick={() => navigate(Routes.PROJECTS)}
          tabIndex={0}
          role="button"
        >
          <img src={Links.arrowLeft} alt="" loading="lazy" />
          {t("barca.back")}
        </div>
        <div className={styles.title}>{t("barca.title")}</div>
        <div className={styles.gradient} />
      </div>
      <ContainerUI>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: animate[0][1] ? 1 : 0,
            x: animate[0][1] ? 0 : -100,
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
          ref={animate[0][0]}
        >
          <div className={styles.text}>{t("barca.mainTitle")}</div>
          <div>
            <div className={styles.desc}>{t("barca.firstDesc")}</div>
            <div className={styles.desc}>{t("barca.secondDesc")}</div>
          </div>
        </motion.div>
        <motion.div
          className={styles.textBlock2}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: animate[1][1] ? 1 : 0,
            x: animate[1][1] ? 0 : -100,
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
          ref={animate[1][0]}
        >
          <div className={styles.text2}>{t("barca.blueTitle")}</div>
          <div className={styles.desc2}>{t("barca.blueDesc")}</div>
        </motion.div>
        <motion.div
          className={styles.cardList}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: animate[2][1] ? 1 : 0,
            x: animate[2][1] ? 0 : -100,
          }}
          transition={{ duration: 0.4, delay: 0.4 }}
          ref={animate[2][0]}
        >
          {data.map((item) => (
            <ProjectCardBig details={item} key={item.title} />
          ))}
        </motion.div>
        <motion.div
          className={styles.projectsList}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: animate[3][1] ? 1 : 0,
            x: animate[3][1] ? 0 : 100,
          }}
          transition={{ duration: 0.4, delay: 0.4 }}
          ref={animate[3][0]}
        >
          {services.map((item) => (
            <ProjectCard details={item} key={item.title} soon />
          ))}
        </motion.div>
      </ContainerUI>
    </>
  );
};
