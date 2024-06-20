import { AuthApi } from "@constants/api";
import { SliceConstants, SliceName } from "@constants/slices";
import {
  FinReportTypes,
  IApartment,
  IFinReport,
  IInfoPage,
  IManagers,
  IProject,
  IVacancies,
  InfoPageType,
  InfoPageViewType,
  QuarterTypes,
} from "@enums/slices";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeAuthorization } from "@store/authorization";
import $api from "@utils/axios";
import { notification } from "antd";
import axios from "axios";
import { generatePath } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface IParams {
  skip?: number;
  limit?: number;
}

export interface BarcaState {
  loading: boolean;
  manager: {
    loading: boolean;
    amount: number;
    items: IManagers[];
  };
  vacancies: {
    loading: boolean;
    amount: number;
    items: IVacancies[];
  };
  project: {
    loading: boolean;
    amount: number;
    items: IProject[];
  };
  infoPage: {
    loading: boolean;
    items: IInfoPage[];
    error?: string;
  };
  finReports: {
    loading: boolean;
    reports: IFinReport[];
    amount: number;
    error?: string;
  };
  finReport: {
    loading: boolean;
    report: IFinReport | null;
    error?: string;
  };
  apartment: {
    loading: boolean;
    amount: number;
    items: IApartment[];
  };
  apartmentById: {
    loading: boolean;
    amount: number;
    item: IApartment | null;
  };
  fbxVisible: boolean;
  callVisible: boolean;
  vacancieById: IVacancies | null;
  replyVacancy: {
    loading: boolean;
    status?: "success" | "error";
  };
}

const initialState: BarcaState = {
  loading: false,
  manager: {
    loading: false,
    amount: 0,
    items: [],
  },
  apartment: {
    loading: false,
    amount: 0,
    items: [],
  },
  apartmentById: {
    loading: false,
    amount: 0,
    item: null,
  },
  vacancieById: null,
  replyVacancy: {
    loading: false,
    status: undefined,
  },
  project: {
    loading: false,
    amount: 0,
    items: [],
  },
  infoPage: {
    items: [],
    loading: false,
  },
  finReports: {
    reports: [],
    amount: 0,
    loading: false,
  },
  finReport: {
    report: null,
    loading: false,
  },
  fbxVisible: false,
  callVisible: false,
  vacancies: {
    loading: false,
    amount: 0,
    items: [],
  },
};

export const getManager = createAsyncThunk(
  SliceConstants.GetMManager,
  async (params: IParams, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL + AuthApi.Manager, {
        params,
        ...makeAuthorization(),
      });
      return { items: data.items, amount: data.amount };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getProject = createAsyncThunk(
  SliceConstants.GetProject,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        BASE_URL + AuthApi.Projects,
        makeAuthorization()
      );
      return { items: data.items, amount: data.amount };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getInfoPage = createAsyncThunk(
  SliceConstants.GetInfoPage,
  async (
    { type, view }: { type: InfoPageType; view: InfoPageViewType },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await $api.get(
        `${
          BASE_URL + AuthApi.InfoPage
        }?info_page_type=${type}&view_type=${view}`
      );
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getFinReports = createAsyncThunk(
  SliceConstants.GetFinReports,
  async (
    params: {
      finreport_type: FinReportTypes;
      quarter_type?: QuarterTypes;
      year?: number;
    } & IParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await $api.get(AuthApi.FinReports, {
        params,
      });
      return { items: data.items, amount: data.amount };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getFinReport = createAsyncThunk(
  SliceConstants.GetFinReport,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(generatePath(AuthApi.FinReport, { id }));
      return data.finreport;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getVacancie = createAsyncThunk(
  SliceConstants.GetVacancie,
  async (
    params: {
      vacancy_type: "barca-experience" | "jalgroup";
    } & IParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(BASE_URL + AuthApi.Vacancie, {
        params,
        ...makeAuthorization(),
      });
      return { items: data.items, amount: data.amount };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getVacancieById = createAsyncThunk(
  SliceConstants.GetVacancieById,
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL + AuthApi.Vacancie}/${id}`,
        makeAuthorization()
      );
      return data.vacancy;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const replyVacancy = createAsyncThunk(
  SliceConstants.ReplyVacancy,
  async (props: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(BASE_URL + AuthApi.VacancyReply, props);

      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const sendApplication = createAsyncThunk(
  SliceConstants.SendApp,
  async function (props: any, { rejectWithValue }) {
    try {
      const { data } = await axios.post(BASE_URL + AuthApi.Application, props);
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getApartment = createAsyncThunk(
  SliceConstants.Apartment,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL + AuthApi.Apartments, {
        ...makeAuthorization(),
      });
      return { items: data.items, amount: data.amount };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getApartmentById = createAsyncThunk(
  SliceConstants.GetApartment,
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL + AuthApi.Apartments}/${id}`,
        makeAuthorization()
      );
      return data.apartment;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const barcaSlice = createSlice({
  name: SliceName.Barca,
  initialState,
  reducers: {
    setCallModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        callVisible: action.payload,
      };
    },
    setFbxModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        fbxVisible: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getManager.pending, (state) => {
      return {
        ...state,
        manager: {
          ...state.manager,
          loading: true,
        },
      };
    });
    builder.addCase(getManager.fulfilled, (state, { payload, meta }) => {
      return {
        ...state,
        manager: {
          loading: false,
          amount: payload.amount,
          items:
            (meta.arg.skip || 0) === 0
              ? payload.items
              : [...state.manager.items, ...payload.items],
        },
      };
    });
    builder.addCase(getManager.rejected, (state) => {
      return {
        ...state,
        manager: {
          loading: false,
          amount: 0,
          items: [],
        },
      };
    });
    builder.addCase(getVacancie.pending, (state) => {
      return {
        ...state,
        vacancies: {
          ...state.vacancies,
          loading: true,
        },
      };
    });
    builder.addCase(getVacancie.fulfilled, (state, { payload, meta }) => {
      return {
        ...state,
        vacancies: {
          loading: false,
          amount: payload.amount,
          items:
            (meta.arg.skip || 0) === 0
              ? payload.items
              : [...state.vacancies.items, ...payload.items],
        },
      };
    });
    builder.addCase(getVacancie.rejected, (state) => {
      return {
        ...state,
        vacancies: {
          loading: false,
          amount: 0,
          items: [],
        },
      };
    });
    builder.addCase(getVacancieById.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getVacancieById.fulfilled, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        vacancieById: payload,
      };
    });
    builder.addCase(getVacancieById.rejected, (state) => {
      return {
        ...state,
        loading: false,
        vacancieById: null,
      };
    });
    builder.addCase(replyVacancy.pending, (state) => {
      return {
        ...state,
        replyVacancy: {
          loading: true,
          status: undefined,
        },
      };
    });
    builder.addCase(replyVacancy.fulfilled, (state) => {
      return {
        ...state,
        replyVacancy: {
          loading: false,
          status: "success",
        },
      };
    });
    builder.addCase(replyVacancy.rejected, (state) => {
      return {
        ...state,
        replyVacancy: {
          loading: false,
          status: "error",
        },
      };
    });
    builder.addCase(getProject.pending, (state) => {
      return {
        ...state,
        project: {
          ...state.project,
          loading: true,
        },
      };
    });
    builder.addCase(getProject.fulfilled, (state, { payload }) => {
      return {
        ...state,
        project: {
          loading: false,
          amount: payload.amount,
          items: payload.items,
        },
      };
    });
    builder.addCase(getProject.rejected, (state) => {
      return {
        ...state,
        project: {
          loading: false,
          amount: 0,
          items: [],
        },
      };
    });
    builder.addCase(getInfoPage.pending, (state) => {
      return {
        ...state,
        infoPage: {
          ...state.infoPage,
          loading: true,
        },
      };
    });
    builder.addCase(getInfoPage.fulfilled, (state, { payload }) => {
      return {
        ...state,
        infoPage: {
          items: payload,
          loading: false,
        },
      };
    });
    builder.addCase(getInfoPage.rejected, (state) => {
      return {
        ...state,
        infoPage: {
          loading: false,
          items: [],
        },
      };
    });
    builder.addCase(getFinReports.pending, (state) => {
      return {
        ...state,
        finReports: {
          ...state.finReports,
          loading: true,
        },
      };
    });
    builder.addCase(getFinReports.fulfilled, (state, { payload, meta }) => {
      return {
        ...state,
        finReports: {
          reports:
            (meta.arg.skip || 0) === 0
              ? payload.items
              : [...state.finReports.reports, ...payload.items],
          amount: payload.amount,
          loading: false,
        },
      };
    });
    builder.addCase(getFinReports.rejected, (state) => {
      return {
        ...state,
        finReports: {
          loading: false,
          amount: 0,
          reports: [],
        },
      };
    });
    builder.addCase(getFinReport.pending, (state) => {
      return {
        ...state,
        finReport: {
          ...state.finReport,
          loading: true,
        },
      };
    });
    builder.addCase(getFinReport.fulfilled, (state, { payload }) => {
      return {
        ...state,
        finReport: {
          report: payload,
          loading: false,
        },
      };
    });
    builder.addCase(getFinReport.rejected, (state) => {
      return {
        ...state,
        finReport: {
          loading: false,
          report: null,
        },
      };
    });
    builder.addCase(getApartment.pending, (state) => {
      return {
        ...state,
        apartment: {
          ...state.apartment,
          loading: true,
        },
      };
    });
    builder.addCase(getApartment.fulfilled, (state, { payload }) => {
      return {
        ...state,
        apartment: {
          loading: false,
          amount: payload.amount,
          items: payload.items,
        },
      };
    });
    builder.addCase(getApartment.rejected, (state) => {
      return {
        ...state,
        apartment: {
          loading: false,
          amount: 0,
          items: [],
        },
      };
    });
    builder.addCase(getApartmentById.pending, (state) => {
      return {
        ...state,
        apartmentById: {
          ...state.apartmentById,
          loading: true,
        },
      };
    });
    builder.addCase(getApartmentById.fulfilled, (state, { payload }) => {
      return {
        ...state,
        apartmentById: {
          loading: false,
          amount: payload.amount,
          item: payload,
        },
      };
    });
    builder.addCase(getApartmentById.rejected, (state) => {
      return {
        ...state,
        apartmentById: {
          loading: false,
          amount: 0,
          item: null,
        },
      };
    });
  },
});

export const { setCallModal, setFbxModal } = barcaSlice.actions;

export default barcaSlice.reducer;
