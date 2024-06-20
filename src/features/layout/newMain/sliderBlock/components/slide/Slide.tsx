/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ContainerUI } from "@ui-kit/container";
import { Links } from "@enums/links";
import styles from "./Slide.module.scss";

type LoaderProps = {
  text: string;
  prevSlide: () => void;
  nextSlide: () => void;
  active: boolean;
};

const Loader = (props: LoaderProps) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  const { active, text, prevSlide, nextSlide } = props;

  const onPrevClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    prevSlide();
  };

  const onNextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    nextSlide();
  };

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, 100);

    return () => clearInterval(progressInterval);
  }, [active]);

  return (
    <div className={styles.loaderWrapper} onClick={(e) => e.stopPropagation()}>
      <div className={styles.btn} onClick={onPrevClick}>
        <img
          src={Links.arrowLeft}
          alt="arrowLeft"
          className={styles.arrowIcon}
          loading="lazy"
        />
      </div>
      <div className={styles.innerLoader}>
        <p>{t("body.next")}</p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {t(text)}
        </motion.span>
        <div className={styles.loader}>
          <div className={styles.loaderBar} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className={styles.btn} onClick={onNextClick}>
        <img
          src={Links.arrowRight}
          alt="arrowRight"
          className={styles.arrowIcon}
          loading="lazy"
        />
      </div>
    </div>
  );
};

type SlideProps = {
  slide: {
    id: string;
    video?: string;
    desc: string;
    loaderText: string;
    image?: string;
    to: string;
  };
  active: boolean;
  prevSlide: () => void;
  nextSlide: () => void;
};

export const Slide = (props: SlideProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { slide, active, prevSlide, nextSlide } = props;
  const { id, image, video, to, desc, loaderText } = slide;

  const navigateTo = () => {
    navigate(to);
  };

  return (
    <div
      className={styles.slide}
      style={{ display: active ? "block" : "none" }}
      onClick={navigateTo}
    >
      {image ? (
        <motion.img
          className={styles.video}
          src={image}
          alt="imageSlide"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      ) : (
        <motion.video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      )}
      <motion.div
        className={styles.bottomBlock}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0 }}
      >
        <ContainerUI>
          <div className={styles.innerContainer}>
            <motion.div
              className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className={styles.number}>{id}</h1>
              <div className={styles.description}>{t(desc)}</div>
            </motion.div>
            <Loader
              text={loaderText}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              active={active}
            />
          </div>
        </ContainerUI>
      </motion.div>
    </div>
  );
};
