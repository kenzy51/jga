import { Image } from "antd";
import { Link, generatePath } from "react-router-dom";
import { Routes } from "@enums/routes";
import styles from "../../News.module.scss";

type PropsTypes = {
  id: number;
  banner?: string;
  title: string;
  date?: string;
  description?: string;
};

export const CardUI: React.FC<PropsTypes> = (props) => {
  const { id, title, banner, date, description } = props;

  return (
    <Link
      to={generatePath(Routes.NEWS_ID, { id: id.toString() })}
      className={styles.card}
    >
      <Image
        rootClassName={styles.image}
        src={banner}
        fallback=""
        preview={false}
        alt="banner"
        loading="lazy"
      />
      <div className={styles.content}>
        {date && <div className={styles.date}>{date}</div>}
        <h2 className={styles.header}>{title}</h2>
        {description && <div className={styles.desc}>{description}</div>}
      </div>
      <div className={styles.arrow} />
    </Link>
  );
};
