import { FC, SVGProps } from "react";
import cn from "classnames";
import styles from "./Loader.module.scss";

type LoaderType = SVGProps<SVGSVGElement> & { fixed?: boolean; dark?: boolean };

export const Loader: FC<LoaderType> = ({
  className,
  fixed,
  dark,
  ...props
}) => {
  const color = fixed ? "rgb(255, 255, 255)" : "#4e4e4e";

  return (
    <div
      className={cn(styles.loaderWrapper, { [styles.loadingOverlay]: fixed })}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={cn(className, styles.loader)}
        {...props}
      >
        <rect width="48" height="48" fill="url(#pattern0)" />
        <g clipPath="url(#clip0_1725_371)">
          <path
            opacity="0.05"
            d="M38.5 24C38.5 21.2485 37.7171 18.5537 36.2428 16.2305C34.7684 13.9073 32.6635 12.0516 30.1738 10.88"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.1"
            d="M38.5 24C38.5 20.312 37.0947 16.7625 34.57 14.0741"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.3"
            d="M38.5 24C38.5 22.1725 38.1545 20.3614 37.4818 18.6622"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M37 24C37 23.9728 36.9999 23.9456 36.9997 23.9183"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <g clipPath="url(#clip1_1725_371)">
          <path
            opacity="0.05"
            d="M16.75 11.4426C14.3671 12.8184 12.4249 14.8438 11.1501 17.2822C9.87531 19.7206 9.32065 22.4714 9.55089 25.2133"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.1"
            d="M16.75 11.4426C13.5561 13.2866 11.1849 16.2784 10.1189 19.809"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.3"
            d="M16.75 11.4426C15.1673 12.3564 13.7717 13.5611 12.6365 14.9933"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17.5 12.7416C17.4765 12.7553 17.4529 12.7689 17.4294 12.7827"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <g clipPath="url(#clip2_1725_371)">
          <path
            opacity="0.05"
            d="M16.75 36.5574C19.1329 37.9332 21.858 38.6025 24.6072 38.4873C27.3563 38.3721 30.0159 37.477 32.2753 35.9067"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.1"
            d="M16.75 36.5574C19.9439 38.4014 23.7205 38.9591 27.311 38.1169"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            opacity="0.3"
            d="M16.75 36.5574C18.3326 37.4712 20.0738 38.0775 21.8818 38.3445"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17.5 35.2584C17.5235 35.272 17.5472 35.2855 17.5708 35.299"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1725_371" />
          </pattern>
          <clipPath id="clip0_1725_371">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(8 8)"
            />
          </clipPath>
          <clipPath id="clip1_1725_371">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(18.1436 45.8564) rotate(-120)"
            />
          </clipPath>
          <clipPath id="clip2_1725_371">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(45.8564 18.1436) rotate(120)"
            />
          </clipPath>
          <image
            id="image0_1725_371"
            width="1"
            height="1"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};
