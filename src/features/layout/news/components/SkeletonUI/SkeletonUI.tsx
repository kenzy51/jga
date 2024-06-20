import { Skeleton, SkeletonProps } from "antd";
import cn from "classnames";
import styles from "../../News.module.scss";

export const SkeletonUI: React.FC<SkeletonProps> = (props) => {
  const { className, active } = props;

  return (
    <div className={styles.skeleton}>
      <Skeleton
        active={active}
        className={cn(styles.content, className)}
        {...props}
      />
    </div>
  );
};
