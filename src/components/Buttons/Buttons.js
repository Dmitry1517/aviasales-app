import React from "react";

import styles from "./Buttons.module.scss";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <button
        type="button"
        className={`${styles.button} ${styles.button_left} ${styles.button_active}`}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={`${styles.button} `}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.button_right} `}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
