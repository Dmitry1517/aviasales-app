/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Filterlist.module.scss";

export default function Filterlist() {
  const checkboxes = [
    { name: "Все", label: "Все" },
    { name: "Без пересадок", label: "Без пересадок" },
    { name: "1 пересадка", label: "1 пересадка" },
    { name: "2 пересадки", label: "2 пересадки" },
    { name: "3 пересадки", label: "3 пересадки" },
  ];

  const elements = checkboxes.map(({ name, label }) => {
    // const  checked = filter === name;

    return <Checkbox key={name} label={label} />;
  });

  return (
    <aside className={styles.filterlist}>
      <div className={styles.filterlist__inner}>
        <h4 className={styles.filterlist__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
        <div className={styles.filterlist__checkboxes}>{elements}</div>
      </div>
    </aside>
  );
}
