/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";

import { selectCheckbox } from "../features/checkbox/checkboxSlice";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Filterlist.module.scss";

export default function Filterlist() {
  const checkboxes = useSelector(selectCheckbox);

  return (
    <aside className={styles.filterlist}>
      <div className={styles.filterlist__inner}>
        <h4 className={styles.filterlist__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
        <div className={styles.filterlist__checkboxes}>
          {checkboxes.map((item) => (
            <Checkbox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
