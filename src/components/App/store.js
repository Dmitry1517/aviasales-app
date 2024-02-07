import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "../features/checkbox/checkboxSlice";
import ticketsReducer from "../features/tickets/ticketsSlice";

export default configureStore({
  reducer: {
    checkbox: checkboxReducer,
    tickets: ticketsReducer,
  },
});
