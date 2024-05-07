import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;