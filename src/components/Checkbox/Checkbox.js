/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import control from "../../images/control.png";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ label }) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" className={styles.checkbox__input} />
      <span className={styles.checkbox__state}>
        <span className={styles.checkbox__control}>
          <img alt="control" src={control} className={styles.checkbox__icon} />
        </span>
        <span className={styles.checkbox__text}>{label}</span>
      </span>
    </label>
  );
}
