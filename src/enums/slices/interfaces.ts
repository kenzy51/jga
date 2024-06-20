export interface IManagers {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  management_type: string;
  photo: string;
}

export type InfoPageType = "faq" | "privacy-policy" | "cookies" | "fin-report";
export type InfoPageViewType = "barca-experience" | "jalgroup";

export type FinReportTypes = "pdf";
export type QuarterTypes = "I" | "II" | "III" | "IV";

export type VacancyTypes = "barca-experience" | "jalgroup";
export type VacancyCities = "jalal-abad" | "bishkek";
export type VacancyStatuses = "active" | "archived" | "deleted";
export type VacancyWorkTypes = "office" | "remote";
export type VacancyExperienceTypes =
  | "none"
  | "less-one"
  | "one_three"
  | "three_six";
export type VacancyEmploymentTypes = "part-time" | "full-time";

export interface IBanner {
  id: number;
  title: string;
  description: string;
  banner: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface IVideo {
  id: number;
  preview_path: string;
  video: string;
  createdAt: string;
  updatedAt: string;
}

export interface IVacancies {
  id: number;
  title: string;
  description: string;
  work_conditions: string;
  skills: string;
  status: VacancyStatuses;
  vacancy_city: VacancyCities;
  vacancy_type: VacancyTypes;
  experience: VacancyExperienceTypes;
  employment: VacancyEmploymentTypes;
  work_type: VacancyWorkTypes;
  min_salary: number;
  max_salary: number;
  createdAt: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  text: string;
  images: string[];
  apartment_images: string[];
  banner: string;
  video: string;
  preview_path: string;
}

export interface IInfoPage {
  id: number;
  title: string;
  description: string;
  text: string;
  images: string[];
  info_page_type: InfoPageType;
  createdAt: string;
  updatedAt: string;
}

export interface IFinReport {
  id: number;
  title: string;
  url: string;
  year: number;
  quarter_type: QuarterTypes;
  finreport_type: FinReportTypes;
  createdAt: string;
  updatedAt: string;
}

export interface IApartment {
  id: number;
  title: string;
  area: number;
  ceiling_heights: number;
  apartment_amount: number;
  floor: number;
  year_completion: number;
  quarter_completion: string;
  plan: string;
  type: "apartment" | any;
  decoration: "white-box" | any;
  images: string[];
  project_block: {
    id: number;
    block_name: string;
    images: string[];
    apartment_images: string[];
    project: IProject;
    createdAt: string;
    updatedAt: string;
  };
  status: VacancyStatuses;
  createdAt: string;
  updatedAt: string;
}
