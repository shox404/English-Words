"use client";

import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios.post("/api/words", { word: "dew" });
  }, []);

  return <main></main>;
}
