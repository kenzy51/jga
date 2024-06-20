import { motion } from "framer-motion";
import styles from "./InfoBlock.module.scss";

export type InfoBlockProps = {
  id: string;
  title: string;
  desc: string;
};

export const InfoBlock = (props: InfoBlockProps & { index: number }) => {
  const { id, title, desc, index } = props;

  return (
    <motion.div
      className={styles.infoBlock}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34, delay: index * 0.6 }}
    >
      <div className={styles.topBlock}>
        <span>{id}</span>
        <div className={styles.line} />
      </div>
      <div className={styles.bottomBlock}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};
