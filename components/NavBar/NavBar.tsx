import React from "react";
import styles from "../../styles/NavBar.module.css";
import A from "../A/A";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <A text="Main" href="/" />
      <A text="Users" href="/users" />
    </nav>
  );
};

export default NavBar;
