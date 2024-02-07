/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (searchId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      if (!response.ok) {
        throw new Error("Ошибка при загрузке билетов");
      }
      const data = await response.json();
      thunkAPI.dispatch(ticketsSlice.actions.setTickets(data.tickets));
      thunkAPI.dispatch(ticketsSlice.actions.setStop(data.stop));
      if (!data.stop) {
        thunkAPI.dispatch(fetchTickets(searchId));
      }
    } catch (error) {
      console.error(error);
      thunkAPI.dispatch(fetchTickets(searchId));
    }
  },
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    searchId: null,
    tickets: [],
    stop: false,
    filteredTickets: [],
    ticketsRender: 5,
    loading: false,
    error: null,
  },
  reducers: {
    setSearchId: (state, action) => {
      state.searchId = action.payload;
    },
    setTickets: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload];
    },
    setStop: (state, action) => {
      state.stop = action.payload;
    },
    cheapest: (state) => {
      state.tickets = [...state.tickets].sort((a, b) => a.price - b.price);
    },
    fastest: (state) => {
      state.tickets = [...state.tickets].sort(
        (a, b) =>
          a.segments.reduce((total, segment) => total + segment.duration, 0) -
          b.segments.reduce((total, segment) => total + segment.duration, 0),
      );
    },
    optimal: (state) => {
      state.tickets = [...state.tickets];
    },
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchOk: (state) => {
      state.loading = false;
    },
    setFilteredTickets: (state, action) => {
      state.filteredTickets = action.payload;
    },
    loadTickets: (state) => {
      state.ticketsRender += 5;
    },
  },
});
export const selectTickets = (state) => state.tickets.tickets;
export const selectFilteredTickets = (state) => state.tickets.filteredTickets;
export const selectTicketsRender = (state) => state.tickets.ticketsRender;
export const selectLoading = (state) => state.tickets.loading;

export const {
  setSearchId,
  setTickets,
  setStop,
  cheapest,
  fastest,
  optimal,
  setFilteredTickets,
  filteredTickets,
  loadTickets,
  fetchStart,
  fetchOk,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
