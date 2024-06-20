import { SliceName } from "@constants/slices";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isShowCodeModal: boolean;
}

const initialState: IAuthState = {
  isShowCodeModal: false,
};

const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    setShowCodeModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isShowCodeModal: action.payload,
      };
    },
  },
});

export const { setShowCodeModal } = authSlice.actions;

export default authSlice.reducer;
