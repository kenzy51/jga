import { Links } from "@enums/links";
import { useTranslation } from "react-i18next";

type ReturnType = {
  images: any[];
  aboutCard: any[];
  infoCard: any[];
  aboutCardBig: any[];
  infoCardBig: any[];
};

export const useData = (): ReturnType => {
  const { t } = useTranslation();

  const images = [
    {
      url: Links.mfc1,
      alternativeText: "Sweden Photo One",
    },
    {
      url: Links.mfc3,
      alternativeText: "Sweden Photo Two",
    },
    {
      url: Links.mfc2,
      alternativeText: "Sweden Photo Three",
    },
    {
      url: Links.mfc4,
      alternativeText: "Sweden Photo Four",
    },
    {
      url: Links.mfc5,
      alternativeText: "Sweden Photo One",
    },
    {
      url: Links.mfc6,
      alternativeText: "Sweden Photo Two",
    },
    {
      url: Links.mfc7,
      alternativeText: "Sweden Photo Three",
    },
    {
      url: Links.mfc8,
      alternativeText: "Sweden Photo Four",
    },
    {
      url: Links.mfc9,
      alternativeText: "Sweden Photo One",
    },
    {
      url: Links.mfc10,
      alternativeText: "Sweden Photo Two",
    },
    {
      url: Links.mfc11,
      alternativeText: "Sweden Photo Three",
    },
    {
      url: Links.mfc12,
      alternativeText: "Sweden Photo Four",
    },
    {
      url: Links.mfc13,
      alternativeText: "Sweden Photo Four",
    },
  ];

  const aboutCard = [
    {
      color: "green",
      title: t("mfc.dop.title1"),
      text: t("mfc.dop.desc1"),
    },
    {
      color: "blue",
      title: t("mfc.dop.title2"),
      text: t("mfc.dop.desc2"),
    },
    {
      color: "red",
      title: t("mfc.dop.title3"),
      text: t("mfc.dop.desc3"),
    },
    {
      color: "purple",
      title: t("mfc.dop.title4"),
      text: t("mfc.dop.desc4"),
    },
  ];

  const aboutCardBig = [
    {
      color: "green",
      title: t("mfc.dop4.title1"),
      text: t("mfc.dop4.desc1"),
    },
    {
      color: "blue",
      title: t("mfc.dop4.title2"),
      text: t("mfc.dop4.desc2"),
    },
    {
      color: "red",
      title: t("mfc.dop4.title3"),
      text: t("mfc.dop4.desc3"),
    },
  ];

  const infoCard = [
    {
      title: "01.",
      text: t("mfc.dop2.title1"),
    },
    {
      title: "02.",
      text: t("mfc.dop2.title2"),
    },
    {
      title: "03.",
      text: t("mfc.dop2.title3"),
    },
    {
      title: "04.",
      text: t("mfc.dop2.title4"),
    },
    {
      title: "05.",
      text: t("mfc.dop2.title5"),
    },
    {
      title: "06.",
      text: t("mfc.dop2.title6"),
    },
  ];

  const infoCardBig = [
    {
      title: "01.",
      text: t("mfc.dop3.title1"),
    },
    {
      title: "02.",
      text: t("mfc.dop3.title2"),
    },
    {
      title: "03.",
      text: t("mfc.dop3.title3"),
    },
    {
      title: "04.",
      text: t("mfc.dop3.title4"),
    },
    {
      title: "05.",
      text: t("mfc.dop3.title5"),
    },
    {
      title: "06.",
      text: t("mfc.dop3.title6"),
    },
    {
      title: "07.",
      text: t("mfc.dop3.title7"),
    },
    {
      title: "08.",
      text: t("mfc.dop3.title8"),
    },
    {
      title: "09.",
      text: t("mfc.dop3.title9"),
    },
    {
      title: "10.",
      text: t("mfc.dop3.title10"),
    },
  ];

  return {
    images,
    aboutCard,
    infoCard,
    aboutCardBig,
    infoCardBig,
  };
};
