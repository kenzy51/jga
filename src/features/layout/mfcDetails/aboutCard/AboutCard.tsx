import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import styles from "./AboutCard.module.scss";

type PropsTypes = {
  data: {
    // color: "green" | "blue" | "red" | "purple";
    color: string;
    title: string;
    text: string;
  };
};

export const AboutCard = ({ data }: PropsTypes) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className={styles.block}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      ref={ref}
    >
      <div className={styles.content}>
        <div
          className={cn({
            [styles.green]: data.color === "green",
            [styles.blue]: data.color === "blue",
            [styles.red]: data.color === "red",
            [styles.purple]: data.color === "purple",
          })}
        />
        <div className={styles.bigTitle}>{data.title}</div>
        <span className={styles.text}>{data.text} </span>
      </div>
    </motion.div>
  );
};
