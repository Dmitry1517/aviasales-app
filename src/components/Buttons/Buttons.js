/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cheapest, fastest, optimal } from "../features/tickets/ticketsSlice";

import styles from "./Buttons.module.scss";

export default function Buttons() {
  const [isActive, setIsActive] = useState(3);
  const dispatch = useDispatch();

  const hendleCheapest = (id) => {
    dispatch(cheapest());
    setIsActive(id);
  };
  const hendleFastest = (id) => {
    dispatch(fastest());
    setIsActive(id);
  };
  const hendleOptimal = (id) => {
    dispatch(optimal());
    setIsActive(id);
  };

  return (
    <div className={styles.buttons}>
      <button
        type="button"
        className={[
          styles.button,
          styles.button_left,
          isActive === 1 ? styles.button_active : "",
        ].join(" ")}
        onClick={() => hendleCheapest(1)}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={[
          styles.button,
          isActive === 2 ? styles.button_active : "",
        ].join(" ")}
        onClick={() => hendleFastest(2)}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={[
          styles.button,
          styles.button_right,
          isActive === 3 ? styles.button_active : "",
        ].join(" ")}
        onClick={() => hendleOptimal(3)}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
