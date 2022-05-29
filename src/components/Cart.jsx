import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { totalContext } from "./App";
export default function Cart() {
  const total = useContext(totalContext);
  return (
    <button className={styles.button}>
      Your Cart <span className={styles.span}>{total.orders}</span>
    </button>
  );
}
