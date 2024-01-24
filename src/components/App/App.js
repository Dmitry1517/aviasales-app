import React from "react";
import Header from "../Header/Header";
import Filterlist from "../Filterlist/Filterlist";
import Ticketgroup from "../Ticketgroup/Ticketgroup";
import Buttons from "../Buttons/Buttons";
import Pagination from "../Pagination/Pagination";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.app__main}>
        <Filterlist />
        <div>
          <Buttons />
          <Ticketgroup />
          <Pagination />
        </div>
      </main>
    </div>
  );
}
