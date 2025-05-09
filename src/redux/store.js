import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/slice";
import filtersReduser from "./filters/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
    auth: authReducer,
  },
});
