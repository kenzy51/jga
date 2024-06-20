import { AppRoutes, Routes } from "@enums/routes";
import { RouteProps } from "react-router-dom";
import { MainPage } from "@pages/MainPage";
import { VacanciesPage } from "@pages/VacanciesPage";
import { VacancyViewPage } from "@pages/VacancyViewPage";
import { ProjectPage } from "@pages/ProjectPage";
import { NewsPage } from "@pages/NewsPage";
import { NewsViewPage } from "@pages/NewsViewPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { AcademyDetailsPage } from "@pages/AcademyDetails";
import { MfcDetailsPage } from "@pages/MfcDetails";
import { ContactsPage } from "@pages/ContactsPage";
import { PrivacyPage } from "@pages/PrivacyPage";
import { FinReportPage } from "@pages/FinReportPage";

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: Routes.MAIN,
  [AppRoutes.NEWS]: Routes.NEWS,
  [AppRoutes.NEWS_ID]: Routes.NEWS_ID,
  [AppRoutes.VACANCIES]: Routes.VACANCIES,
  [AppRoutes.ACADEMY]: Routes.ACADEMY,
  [AppRoutes.MFC]: Routes.MFC,
  [AppRoutes.PROJECTS]: Routes.PROJECTS,
  [AppRoutes.VACANCY_ID]: Routes.VACANCY_ID,
  [AppRoutes.CONTACTS]: Routes.CONTACTS,
  [AppRoutes.PRIVACY]: Routes.PRIVACY,
  [AppRoutes.FIN_REPORT]: Routes.FIN_REPORT,
  [AppRoutes.NOT_FOUND]: Routes.NOT_FOUND,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
  [AppRoutes.NEWS_ID]: {
    path: RoutePath["news/:id"],
    element: <NewsViewPage />,
  },
  [AppRoutes.PROJECTS]: {
    path: RoutePath.projects,
    element: <ProjectPage />,
  },
  [AppRoutes.ACADEMY]: {
    path: RoutePath["projects/academy"],
    element: <AcademyDetailsPage />,
  },
  [AppRoutes.MFC]: {
    path: RoutePath["projects/mfc"],
    element: <MfcDetailsPage />,
  },

  [AppRoutes.VACANCIES]: {
    path: RoutePath.vacancies,
    element: <VacanciesPage />,
  },
  [AppRoutes.VACANCY_ID]: {
    path: RoutePath["vacancies/:id"],
    element: <VacancyViewPage />,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />,
  },
  [AppRoutes.PRIVACY]: {
    path: RoutePath["privacy-police"],
    element: <PrivacyPage />,
  },
  [AppRoutes.FIN_REPORT]: {
    path: RoutePath["fin-report/:id"],
    element: <FinReportPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["*"],
    element: <NotFoundPage />,
  },
};
