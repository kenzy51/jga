import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContainerUI } from "@ui-kit/container";
import { useMediaQuery } from "@mui/material";
import styles from "./Advantages.module.scss";
import { WorkDirCard, InfoBlock } from "./components";
import { useData } from "./hooks/useData";

export const Advantages = () => {
  const { t } = useTranslation();
  const refAnimate = useRef<HTMLDivElement>(null);
  const laptop = useMediaQuery("(max-width:1024px)");
  const [scrollY, setScrollY] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { workDirCards, infoCards } = useData();

  useEffect(() => {
    const handleScroll = () => {
      if (inView && refAnimate.current && !laptop) {
        const containerRect = refAnimate.current.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;
        const containerBottom = containerRect.bottom + window.scrollY;
        const triggerScrollY = containerTop - 150;
        const triggerScrollYBottom = containerBottom - 410;
        const newScrollY = window.scrollY - triggerScrollY;

        if (
          window.scrollY > triggerScrollY &&
          window.scrollY < triggerScrollYBottom
        ) {
          setScrollY(newScrollY);
        } else if (window.scrollY < triggerScrollY) {
          setScrollY(0);
        }
      }
    };

    if (!laptop) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  useEffect(() => {
    if (inView && !laptop) {
      controls.start({ y: scrollY });
    } else {
      controls.start({ y: 0 });
    }
  }, [scrollY, inView, controls]);

  return (
    <div className={styles.advantages}>
      <ContainerUI>
        <div className={styles.workDir}>
          <h2 className={styles.title}>{t("workDir.workDirection")}</h2>
          <div className={styles.workDirList}>
            {workDirCards.map((dir, index) => (
              <WorkDirCard key={dir.id} {...dir} index={index} />
            ))}
          </div>
        </div>
        <div className={styles.ourValues} ref={refAnimate}>
          <motion.div
            className={styles.title}
            ref={ref}
            initial={{ y: 0 }}
            animate={controls}
            transition={{ duration: 0 }}
          >
            {t("values.valuesTitle")}
          </motion.div>
          <motion.div
            className={styles.infoList}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
            transition={{ duration: 0.34, delay: 0.4 }}
            ref={ref}
          >
            {infoCards.map((item, index) => {
              return <InfoBlock key={item.id} {...item} index={index} />;
            })}
          </motion.div>
        </div>
      </ContainerUI>
    </div>
  );
};
