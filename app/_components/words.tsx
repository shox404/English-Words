"use client";

import { useEffect } from "react";
import { useWords } from "../_store/words";

export default function Words() {
  const { get, words } = useWords();

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {words.flat().filter((e) => !e.know).length} words from{" "}
      {words.flat().length}
    </div>
  );
}
