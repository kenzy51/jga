import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Links } from "@enums/links";
import { ContainerUI } from "@ui-kit/container";
import { Routes } from "@enums/routes";
import { useData } from "./hooks/useData";
import { AboutCard } from "./aboutCard";
import { InfoCard } from "./infoCard";
import styles from "./MfcDetails.module.scss";

export const MfcDetailsLayout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { images, aboutCard, infoCard, aboutCardBig, infoCardBig } = useData();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className={styles.background}>
        <div
          className={styles.btnBack}
          onClick={() => navigate(Routes.PROJECTS)}
          tabIndex={0}
          role="button"
        >
          <img src={Links.arrowLeft} alt="" />
          {t("mfc.back")}
        </div>
        <div className={styles.title}>{t("mfc.title")}</div>
        <div className={styles.titleMob}>{t("mfc.titleMob")}</div>
        <div className={styles.gradient} />
      </div>
      <ContainerUI>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          ref={ref}
        >
          <div className={styles.text}>{t("mfc.mainTitle")}</div>
          <div className={styles.descBlock}>
            <div className={styles.desc}>{t("mfc.firstDesc")}</div>
            <div className={styles.desc2}>{t("mfc.secondDesc")}</div>
          </div>
        </motion.div>
        <motion.div
          className={styles.text2}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -100 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          ref={ref2}
        >
          {t("mfc.blueTitle")}
        </motion.div>
        <Swiper
          id="main"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination]}
          className={styles.swiper}
        >
          {images.map((photo) => (
            <SwiperSlide key={photo.alternativeText}>
              <img
                src={photo.url}
                alt={photo.alternativeText}
                className={styles.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <>
          <div className={styles.about}>{t("mfc.about")}</div>
          <div className={styles.blockList}>
            {aboutCard.map((item) => (
              <AboutCard data={item} key={item.title} />
            ))}
          </div>
          <div className={styles.about2}>{t("mfc.info")}</div>
          <div className={styles.infoList}>
            {infoCard.map((item) => (
              <InfoCard data={item} key={item.title} />
            ))}
          </div>
          <div className={styles.about}>{t("mfc.advantage")}</div>
          <div className={styles.advantageList}>
            {aboutCardBig.map((item) => (
              <AboutCard data={item} key={item.title} />
            ))}
          </div>
          <div className={styles.advantageDetailList}>
            {infoCardBig.map((item) => (
              <InfoCard data={item} key={item.title} />
            ))}
          </div>
        </>
      </ContainerUI>
    </>
  );
};
