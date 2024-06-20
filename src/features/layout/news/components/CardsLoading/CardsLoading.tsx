import { SkeletonUI } from "../SkeletonUI";
import styles from "../../News.module.scss";

export const CardsLoading = () => {
  return (
    <div className={styles.newsList}>
      <div className={styles.newsGroup}>
        <div className={styles.bigNews}>
          <SkeletonUI active />
        </div>
        <div className={styles.smallNews}>
          <SkeletonUI active />
          <SkeletonUI active />
        </div>
      </div>
    </div>
  );
};
