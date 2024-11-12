'use client';
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import User from "../components/User";
import MapComponent from "../components/MapComponent";
import { IpData } from "../types/types";

  const isValidIP = (value: string) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(value);
  };
  
  const isValidDomain = (value: string) => {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,11}?$/;
    return domainRegex.test(value);
  };

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [lat, setLat] = useState(19.449252);
  const [lng, setLng] = useState(-99.1638502);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;
  
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${userIP}`;
  
        const response = await fetch(url);
        const data = await response.json();
        setIpData(data);
        setLat(data.location.lat);
        setLng(data.location.lng);
      } catch (error) {
        console.error("Error fetching user IP or geolocation data:", error);
      }
    };
  
    fetchUserIP();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setErrorMessage(null);
  };

  const handleOnFocus = () => {
    setErrorMessage(null);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    let url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;

    if (isValidIP(inputValue)) {
      url += `&ipAddress=${inputValue}`;
    } else if (isValidDomain(inputValue)) {
      url += `&domain=${inputValue}`;
    } else {
      setErrorMessage("Invalid input. Please enter a valid IP address or domain.");
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
            onFocus={handleOnFocus} 
            onChange={handleInputChange}
          />
          <button type="submit"></button>
        </form>
        {errorMessage && <div className={`${styles.errorTooltip} ${styles.show}`}>{errorMessage}</div>}
      </main>
      <div className={styles["map-container"]}>
        <MapComponent lat={lat} lng={lng} />
      </div>
      <User ipData={ipData} />
    </div>
  );
}