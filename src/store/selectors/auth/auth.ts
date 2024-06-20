import { createSelector } from "@reduxjs/toolkit";
import { IAuthState } from "@store/slices";

type WithauthState = {
  auth: IAuthState;
};

export const authStateSelector = (state: WithauthState): IAuthState =>
  state.auth;

export const getShowCodeModalSelector = createSelector(
  authStateSelector,
  (authSliceState) => {
    return authSliceState.isShowCodeModal;
  }
);
