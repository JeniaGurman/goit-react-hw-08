import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  fetchAllContacts,
} from "./operations";
import { apiLogout } from "../auth/operations";

const INITAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          fetchAllContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending,
          apiLogout.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected,
          apiLogout.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
