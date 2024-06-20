import { Links } from "@enums/links";
import { useTranslation } from "react-i18next";
import { InfoBlockProps, WorkDirProps } from "../components";

type ReturnType = {
  workDirCards: WorkDirProps[];
  infoCards: InfoBlockProps[];
};

export const useData = (): ReturnType => {
  const { t } = useTranslation();

  const workDirCards = [
    {
      id: "01.",
      image: Links.ball,
      title: t("workDir.managementTitle"),
      description: t("workDir.managementDesc"),
    },
    {
      id: "02.",
      image: Links.kepka,
      title: t("workDir.devTitle"),
      description: t("workDir.devDesc"),
    },
    {
      id: "03.",
      image: Links.moneyDollar,
      title: t("workDir.investTitle"),
      description: t("workDir.investDesc"),
    },
  ];

  const infoCards = [
    {
      id: "01.",
      title: t("values.profTitle"),
      desc: t("values.profDesc"),
    },
    {
      id: "02.",
      title: t("values.innovationTitle"),
      desc: t("values.innovationDesc"),
    },
    {
      id: "03.",
      title: t("values.supportTitle"),
      desc: t("values.supportDesc"),
    },
    {
      id: "04.",
      title: t("values.eticTitle"),
      desc: t("values.eticDesc"),
    },
    {
      id: "05.",
      title: t("values.leaderTitle"),
      desc: t("values.leaderDesc"),
    },
  ];

  return {
    workDirCards,
    infoCards,
  };
};
