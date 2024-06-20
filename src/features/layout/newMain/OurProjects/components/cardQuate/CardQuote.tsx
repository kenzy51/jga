import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Links } from "@enums/links";
import styles from "./CardQuote.module.scss";

export const CardQuote = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className={styles.parent}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      ref={ref}
    >
      <div className={styles.cardWrapper}>
        <div className={styles.content}>
          <img
            src={Links.quote}
            alt="quote"
            className={styles.quote}
            loading="lazy"
          />
          <p className={styles.text}>{t("ceo.quote")}</p>
          <div className={styles.nameBlock}>
            <span className={styles.name}>{t("ceo.aibek")}</span>
            <span className={styles.position}>{t("ceo.president")}</span>
          </div>
        </div>
        <div className={styles.imageBlock}>
          <img
            src={Links.aibek}
            alt="President"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};
