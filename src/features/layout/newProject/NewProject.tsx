import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ContainerUI } from "@ui-kit/container";
import { useData } from "./hooks/useData";
import { ProjectCard } from "./projectCard";
import styles from "./NewProject.module.scss";

export const NewProject = () => {
  const { t } = useTranslation();
  const { data } = useData();

  return (
    <ContainerUI>
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.title}>{t("newProject.title")}</div>
        <div className={styles.desc}>{t("newProject.desc")}</div>
      </motion.div>
      <div className={styles.projectList}>
        {data.map((item) => (
          <ProjectCard details={item} key={item.id} />
        ))}
      </div>
    </ContainerUI>
  );
};
