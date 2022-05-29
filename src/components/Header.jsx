import React from "react";
import Cart from "./Cart";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>React Meals</h1>
      <Cart />
    </nav>
  );
}
