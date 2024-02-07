/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch } from "react-redux";
import { toggleCheckbox } from "../features/checkbox/checkboxSlice";
import control from "../../images/control.png";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ id, label, checked }) {
  const dispatch = useDispatch();
  const handlerOnChange = () => {
    dispatch(toggleCheckbox({ id }));
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.checkbox__input}
        checked={checked}
        onChange={handlerOnChange}
      />
      <span className={styles.checkbox__state}>
        <span className={styles.checkbox__control}>
          <img alt="control" src={control} className={styles.checkbox__icon} />
        </span>
        <span className={styles.checkbox__text}>{label}</span>
      </span>
    </label>
  );
}
