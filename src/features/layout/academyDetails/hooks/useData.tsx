import { URLS_PROJECTS } from "@constants/urls";
import { Links } from "@enums/links";
import { Filial } from "@models/project";
import { useTranslation } from "react-i18next";

type ReturnType = {
  data: Filial[];
  services: Filial[];
};

export const useData = (): ReturnType => {
  const { t } = useTranslation();

  const data = [
    {
      route: `${URLS_PROJECTS.experience}/jalal-abad`,
      image: Links.jalAcademy,
      title: t("barca.jal"),
    },
    {
      route: `${URLS_PROJECTS.experience}/bishkek`,
      image: Links.bishAcademy,
      title: t("barca.bish"),
    },
  ];

  const services = [
    {
      route: URLS_PROJECTS.store,
      image: Links.barcaStore,
      title: t("barca.store"),
    },
    {
      route: `${URLS_PROJECTS.experience}/services/bishkek/cafe`,
      image: Links.bishCafe,
      title: t("barca.cafe"),
    },
    {
      route: `${URLS_PROJECTS.experience}/services/bishkek/museum`,
      image: Links.bishMuseum,
      title: t("barca.museum"),
    },
  ];

  return {
    data,
    services,
  };
};
