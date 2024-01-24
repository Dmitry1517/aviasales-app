import React from "react";

import styles from "./Pagination.module.scss";

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.pagination__button}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
}
