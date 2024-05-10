import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITAL_STATE,
  extraReducers: (builder) =>
    builder

      .addCase(apiRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(apiLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(apiLogout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.loading = true;
        state.error = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.loading = false;
        state.error = true;
      })
      .addMatcher(
        isAnyOf(apiRegister.pending, apiLogin.pending, apiLogout.pending),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(apiRegister.rejected, apiLogin.rejected, apiLogout.rejected),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      ),
});

export const authReducer = authSlice.reducer;