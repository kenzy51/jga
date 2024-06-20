/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from "react";
import { Routes } from "@enums/routes";
import barcaVideo from "./assets/video.mp4";
import mfk from "./assets/compressed.jpg";
import styles from "./SliderBlock.module.scss";
import { Slide } from "./components";

const slides = [
  {
    id: "01",
    video: barcaVideo,
    desc: "body.firstDesc",
    loaderText: "body.nextText",
    to: Routes.ACADEMY,
  },
  {
    id: "02",
    image: mfk,
    desc: "body.secondDesc",
    loaderText: "Barca experience",
    to: Routes.MFC,
  },
];

export const SliderBlock = () => {
  const [slide, setSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    startInterval();
  };

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    startInterval();
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {slides.map((item, index) => (
        <Slide
          key={item.id}
          slide={item}
          active={index === slide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      ))}
    </div>
  );
};
