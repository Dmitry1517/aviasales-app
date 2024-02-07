/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */

import React from "react";
import TicketData from "../../aviasalesApi/Ticket";

import styles from "./Ticket.module.scss";

export default function Ticket({ price, segments, carrier }) {
  const ticketData = new TicketData();

  return (
    <div className={styles.ticket}>
      <header className={styles.ticket__header}>
        <div className={styles.ticket__price}>{price}</div>
        <div className={styles.ticket__image}>
          <img alt="airlogo" src={`https://pics.avs.io/99/36/${carrier}.png`} />
        </div>
      </header>
      <main className={styles.ticket__data}>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>
            {`${segments[0].origin} - ${segments[0].destination}`}
          </span>
          <span className={styles.ticket__time}>
            {`${ticketData.getStart(segments[0].date)} - ${ticketData.getFinish(segments[0].date, segments[0].duration)}`}
          </span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>В ПУТИ</span>
          <span className={styles.ticket__time}>
            {ticketData.getDuration(segments[0].duration)}
          </span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>
            {ticketData.quanityStops(segments[0].stops)}
          </span>
          <span className={styles.ticket__time}>
            {ticketData.getStops(segments[0].stops)}
          </span>
        </div>
        <div className={styles.ticket__item}>
          <span
            className={styles.ticket__towns}
          >{`${segments[1].origin} - ${segments[1].destination}`}</span>
          <span
            className={styles.ticket__time}
          >{`${ticketData.getStart(segments[1].date)} - ${ticketData.getFinish(segments[1].date, segments[1].duration)}`}</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>В ПУТИ</span>
          <span className={styles.ticket__time}>
            {ticketData.getDuration(segments[1].duration)}
          </span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>
            {ticketData.quanityStops(segments[1].stops)}
          </span>
          <span className={styles.ticket__time}>
            {ticketData.getStops(segments[1].stops)}
          </span>
        </div>
      </main>
    </div>
  );
}
