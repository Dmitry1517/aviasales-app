/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Filterlist from "../Filterlist/Filterlist";
import Ticketgroup from "../Ticketgroup/Ticketgroup";
import Buttons from "../Buttons/Buttons";
import Pagination from "../Pagination/Pagination";
import {
  fetchTickets,
  fetchStart,
  fetchOk,
  selectLoading,
  selectFilteredTickets,
} from "../features/tickets/ticketsSlice";
import AviasalesApi from "../../aviasalesApi/AviasalesApi";

import styles from "./App.module.scss";

export default function App() {
  const [searchId, setSearchId] = useState("");
  const aviasalesApi = new AviasalesApi();
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    aviasalesApi
      .getSearchId()
      .then((data) => setSearchId(data.searchId))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    dispatch(fetchStart());
    if (searchId) {
      dispatch(fetchTickets(searchId));
      dispatch(fetchOk());
    }
  }, [searchId, dispatch]);

  console.log(tickets);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.app__main}>
        <Filterlist />
        <div>
          <Buttons />
          {loading ? (
            <div className={styles.app__loading}>Загрузка билетов...</div>
          ) : (
            <>
              <Ticketgroup />
              <Pagination />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
