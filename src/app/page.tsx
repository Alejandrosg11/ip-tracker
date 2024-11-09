'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import User from "../components/User";
import MapComponent from "../components/MapComponent";
import { IpData } from "../types/types";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [lat, setLat] = useState(19.449252);
  const [lng, setLng] = useState(-99.1638502);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiKey = "at_RxhwL1SzifSFiMG1r1c8Q4hagsfmU";
    const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${inputValue}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIpData(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>IP Address Tracker</h1>
        <form className={styles.interface} onSubmit={handleSubmit}>
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
        <MapComponent lat={lat} lng={lng} />
      </div>
      <User ipData={ipData} />
    </div>
  );
}