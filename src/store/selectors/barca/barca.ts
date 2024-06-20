import { createSelector } from "@reduxjs/toolkit";
import { BarcaState } from "@store/slices";

type WithbarcaState = {
  barca: BarcaState;
};

export const barcaStateSelector = (state: WithbarcaState): BarcaState =>
  state.barca;

export const getLoadingSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.loading;
  }
);

export const getManagerSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.manager;
  }
);

export const getCallVisibleSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.callVisible;
  }
);

export const getVacanciesSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.vacancies;
  }
);

export const getFbxSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.fbxVisible;
  }
);

export const getApartmentSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.apartment;
  }
);

export const getApartmentByIdSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.apartmentById;
  }
);

export const getVacancieByIdSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.vacancieById;
  }
);

export const getProjectSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.project;
  }
);

export const getInfoPageSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.infoPage;
  }
);

export const getFinReportsSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.finReports;
  }
);

export const getFinReportSelector = createSelector(
  barcaStateSelector,
  (barcaSliceState) => {
    return barcaSliceState.finReport;
  }
);
