import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./WorkDirCard.module.scss";

export type WorkDirProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export const WorkDirCard = (props: WorkDirProps & { index: number }) => {
  const { id, image, title, description, index } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      ref={ref}
    >
      <span className={styles.number}>{id}</span>
      <img src={image} alt="" loading="lazy" />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.desc}>{description}</div>
      </div>
    </motion.div>
  );
};
