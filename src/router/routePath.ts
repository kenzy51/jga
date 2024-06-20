import { AppRoutes, Routes } from "@enums/routes";

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: Routes.MAIN,
  [AppRoutes.NEWS]: Routes.NEWS,
  [AppRoutes.NEWS_ID]: Routes.NEWS_ID,
  [AppRoutes.VACANCIES]: Routes.VACANCIES,
  [AppRoutes.PROJECTS]: Routes.PROJECTS,
  [AppRoutes.ACADEMY]: Routes.ACADEMY,
  [AppRoutes.MFC]: Routes.MFC,
  [AppRoutes.VACANCY_ID]: Routes.VACANCY_ID,
  [AppRoutes.NOT_FOUND]: Routes.NOT_FOUND,
  [AppRoutes.CONTACTS]: Routes.CONTACTS,
  [AppRoutes.PRIVACY]: Routes.PRIVACY,
  [AppRoutes.FIN_REPORT]: Routes.FIN_REPORT,
};
