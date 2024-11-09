'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import User from "../components/User";
import MapComponent from "../components/MapComponent";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>IP Address Tracker</h1>
        <form className={styles.interface}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit"></button>
        </form>
      </main>
      <div className={styles["map-container"]}>
        <MapComponent />
      </div>
      <User />
    </div>
  );
}