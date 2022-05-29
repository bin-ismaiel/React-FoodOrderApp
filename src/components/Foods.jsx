import React, { useContext } from "react";
import styles from "./Foods.module.css";
import Food from "./Food";
import menu from "./Menu";
import totalContext from "./App";
export default function Foods() {
  const totalVal = useContext(totalContext);
  return (
    <div className={styles.div}>
      {menu.map((el) => (
        <Food {...el} key={el.id} />
      ))}
    </div>
  );
}
