"use client"
import React, { useState, useEffect } from "react";
const startTime = new Date();
export default function DateAndTime() {
  const [date, setDate] = useState("Date and time");
  const [uptime, setUptime] = useState("0h 0m 0s");
  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 100);
    const uptimeInterval = setInterval(() => {
      setUptime(calculateUptime(startTime));
    }, 100);
    return () => {
      clearInterval(dateInterval);
      clearInterval(uptimeInterval);
    };
  }, []);
  function calculateUptime(startTime) {
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }
  return (
    <>
      <h3
        style={{
          color: "slateblue",
          textAlign: "center",
          marginTop:"20px"
        }}
      >
        Today's date and time
      </h3>
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>{date}</h4>
      <h3
        style={{
          color: "slateblue",
          textAlign: "center",
          marginTop:"20px"
        }}
      >
        You've been here for
      </h3>
      <h4 style={{ textAlign: "center",marginTop:"5px" }}>
        {uptime}
      </h4>
    </>
  );
}
