import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from "./operations";
import { selectNameFilter } from "../filters/selectors";
import { selectContacts } from "./selectors";
import { logoutThunk } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item && item.id !== action.payload
        );
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.editContact = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          editContact.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          fetchContacts.fulfilled
        ),
        (state, action) => {
          state.error = null;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          editContact.rejected,
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          editContact.pending,
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state, action) => {
          state.loading = true;
        }
      );
  },
});

export const { dataFulfilledOperation, setLoading, setError } = slice.actions;
export default slice.reducer;
