import React from "react";

import styles from "./Ticket.module.scss";
import airlogo from "../../images/s7.png";

export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <header className={styles.ticket__header}>
        <div className={styles.ticket__price}>13 400</div>
        <div className={styles.ticket__image}>
          <img alt="airlogo" src={airlogo} />
        </div>
      </header>
      <main className={styles.ticket__data}>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={styles.ticket__item}>
          <span className={styles.ticket__towns}>MOW - HKT</span>
          <span className={styles.ticket__time}>10:45 - 08:00</span>
        </div>
      </main>
    </div>
  );
}
