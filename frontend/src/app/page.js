"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("https://TU-BACKEND.onrender.com/health")
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>MSP Cloud Platform</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}