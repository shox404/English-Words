"use client";

import { useEffect } from "react";
import { useWords } from "./_store/words";

export default function Home() {
  const { words, get } = useWords();

  useEffect(() => {
    if (words.length == 0) get();
  }, [words]);

  return <main>{}</main>;
}
