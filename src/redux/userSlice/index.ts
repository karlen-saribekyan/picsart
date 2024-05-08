import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { AppThunk } from "../store";

import { USERS } from "./index.data";
import { IUserResponse, IUserState } from "./index.models";

const initialState: IUserState = {
  loading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
    },
    userListFulfilled: (state, action: PayloadAction<IUserResponse[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    userDetailsFulfilled: (
      state,
      action: PayloadAction<IUserResponse | undefined>
    ) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchFulfilled: state => {
      state.loading = false;
    },
    fetchFailed: (state, action: PayloadAction<AxiosError<string>>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export const fetchUsers =
  (): AppThunk<Promise<IUserResponse[] | undefined>> => async dispatch => {
    try {
      dispatch(userActions.fetchStarted());

      dispatch(userActions.userListFulfilled(USERS));

      return USERS;
    } catch (e) {
      const err = e as AxiosError<string>;
      dispatch(userActions.fetchFailed(err));

      throw err;
    }
  };

export const fetchUser =
  (id: number): AppThunk<Promise<IUserResponse | undefined>> =>
  async dispatch => {
    try {
      dispatch(userActions.fetchStarted());

      const user = USERS.find(p => p.id === id);
      dispatch(userActions.userDetailsFulfilled(user));

      return user;
    } catch (e) {
      const err = e as AxiosError<string>;
      dispatch(userActions.fetchFailed(err));

      throw err;
    }
  };

export default userSlice.reducer;
