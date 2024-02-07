import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTickets,
  selectFilteredTickets,
} from "../features/tickets/ticketsSlice";

import styles from "./Pagination.module.scss";

export default function Pagination() {
  const dispatch = useDispatch();
  const ticketsArr = useSelector(selectFilteredTickets);

  const getFiveTickets = () => {
    dispatch(loadTickets());
  };

  if (ticketsArr.length === 0) return "";

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.pagination__button}
        onClick={getFiveTickets}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
}
