import React from "react";
import Logo from "../../images/Logo.png";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <img alt="logo" src={Logo} />
      </div>
    </header>
  );
}
