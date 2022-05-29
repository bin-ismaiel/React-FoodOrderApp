import React, { useContext, useState, useRef } from "react";
import styles from "./Food.module.css";
import { totalContext } from "./App";
export default function Food(props) {
  const [amount, setAmount] = useState(1);
  const ordersVal = useContext(totalContext);
  const ordersAmount = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    ordersVal.setOrders((prev) => prev + +ordersAmount.current.value);
  }

  function handleChange(event) {
    if (event.target.value <= 0) {
      return;
    } else {
      setAmount(event.target.value);
    }
  }

  return (
    <div className={styles.card}>
      <div style={{ textAlign: "left" }}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <span className={styles.price}>${props.price}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label forhtml="amount">Amount</label>
        <input
          type="number"
          id="amount"
          className={styles.foodInput}
          value={amount}
          onChange={handleChange}
          ref={ordersAmount}
        />
        <br />
        <button type="submit" className={styles.foodBtn}>
          +Add
        </button>
      </form>
    </div>
  );
}
