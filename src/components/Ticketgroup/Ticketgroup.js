import React from "react";
import Ticket from "../Ticket/Ticket";

import styles from "./Ticketgroup.module.scss";

export default function Ticketgroup() {
  return (
    <div className={styles.ticketgroup}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}
