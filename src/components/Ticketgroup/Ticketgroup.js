/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import { selectCheckbox } from "../features/checkbox/checkboxSlice";
import {
  selectFilteredTickets,
  setFilteredTickets,
  selectTickets,
  selectTicketsRender,
} from "../features/tickets/ticketsSlice";

import styles from "./Ticketgroup.module.scss";

export default function Ticketgroup() {
  const dispatch = useDispatch();
  const checkbox = useSelector(selectCheckbox);
  const filteredTickets = useSelector(selectFilteredTickets);
  const tickets = useSelector(selectTickets);
  const ticketsRender = useSelector(selectTicketsRender);

  useEffect(() => {
    const filtered = tickets.filter((ticket) => {
      for (let i = 1; i < checkbox.length; i++) {
        if (
          checkbox[i].checked &&
          ticket.segments[0].stops.length === checkbox[i].id
        ) {
          return true;
        }
      }
      if (checkbox[0].checked) {
        return true;
      }
      return false;
    });
    dispatch(setFilteredTickets(filtered));
  }, [checkbox, dispatch, tickets]);

  return (
    <div className={styles.ticketgroup}>
      {filteredTickets.length === 0 ? (
        <div className={styles.ticketgroup__alert}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      ) : (
        filteredTickets
          .slice(0, ticketsRender)
          .map((item) => <Ticket key={item.segments[0].date} {...item} />)
      )}
    </div>
  );
}
