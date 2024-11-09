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

  const isValidIP = (value: string) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(value);
  };
  
  const isValidDomain = (value: string) => {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,11}?$/;
    return domainRegex.test(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    let url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;

    if (isValidIP(inputValue)) {
      url += `&ipAddress=${inputValue}`;
    } else if (isValidDomain(inputValue)) {
      url += `&domain=${inputValue}`;
    } else {
      console.error("Invalid input");
      return;
    }

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