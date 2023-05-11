import React from 'react'
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Header</h1>
      <button className={styles.button}>Click</button>
    </div>
  );
}

export default Header