import { URLS_PROJECTS } from "@constants/urls";
import { Links } from "@enums/links";
import { Routes } from "@enums/routes";
import { Project } from "@models/project";
import { useTranslation } from "react-i18next";

type ReturnType = {
  data: Project[];
};

export const useData = (): ReturnType => {
  const { t } = useTranslation();

  const data = [
    {
      id: "01.",
      route: `${URLS_PROJECTS.experience}/jalal-abad`,
      image: [Links.academy, Links.academyMobile],
      title: t("newProject.jal"),
      soon: false,
    },
    {
      id: "02.",
      route: `${URLS_PROJECTS.experience}/bishkek`,
      title: t("newProject.bish"),
      image: [Links.team, Links.teamMobile],
      soon: true,
    },
    {
      id: "03.",
      route: Routes.MFC,
      image: [Links.mfc, Links.mfcMobile],
      title: t("newProject.mfc"),
      soon: true,
    },
  ];

  return {
    data,
  };
};
