import { motion } from "framer-motion";
import styles from "./AboutCard.module.scss";

type PropsTypes = {
  data: {
    title: string;
    text: string;
  };
};

export const AboutCardBig = ({ data }: PropsTypes) => {
  return (
    <motion.div
      className={styles.block}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        <div className={styles.line} />
        <div className={styles.bigTitle}>{data.title}</div>
        <span className={styles.text}>{data.text} </span>
      </div>
    </motion.div>
  );
};
