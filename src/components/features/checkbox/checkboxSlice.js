/* eslint-disable no-restricted-syntax */

import { createSlice } from "@reduxjs/toolkit";

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState: {
    checkbox: [
      { id: -1, label: "Все", checked: true },
      { id: 0, label: "Без пересадок", checked: true },
      { id: 1, label: "1 пересадка", checked: true },
      { id: 2, label: "2 пересадки", checked: true },
      { id: 3, label: "3 пересадки", checked: true },
    ],
  },
  reducers: {
    toggleCheckbox(state, action) {
      const toggled = state.checkbox.find(
        (item) => item.id === action.payload.id,
      );
      toggled.checked = !toggled.checked;
      if (toggled.id === -1 && toggled.checked) {
        for (const i of state.checkbox) {
          i.checked = true;
        }
      }
      if (toggled.id === -1 && !toggled.checked) {
        for (const i of state.checkbox) {
          i.checked = false;
        }
      }

      for (let i = 1; i < state.checkbox.length; i++) {
        if (!state.checkbox[i].checked) {
          const allCheckbox = state.checkbox.find((item) => item.id === -1);
          allCheckbox.checked = false;
        }
        if (
          state.checkbox[1].checked &&
          state.checkbox[2].checked &&
          state.checkbox[3].checked &&
          state.checkbox[4].checked
        ) {
          const allCheckbox = state.checkbox.find((item) => item.id === -1);
          allCheckbox.checked = true;
        }
      }
    },
  },
});

export const selectCheckbox = (state) => state.checkbox.checkbox;

export const { toggleCheckbox } = checkboxSlice.actions;

export default checkboxSlice.reducer;
