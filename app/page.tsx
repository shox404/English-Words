"use client";

import { useEffect } from "react";
import { useWords } from "./_store/words";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Home() {
  const { words, get } = useWords();

  useEffect(() => {
    if (words.length == 0) get();
  }, [words]);

  const speech = (text: string) => {
    const uttr = new SpeechSynthesisUtterance(text);
    const voices = globalThis.speechSynthesis.getVoices();
    const slVc = voices.find((voice) => voice.name === "Google US English");
    if (slVc) {
      uttr.voice = slVc;
      globalThis.speechSynthesis.speak(uttr);
    }
  };

  return (
    <main>
      {words.map((item, index) => (
        <Card key={index} className="card">
          <CardHeader className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h1 className="capitalize">{item.word}</h1> -
              <h2>{item.translate}</h2>
            </div>
            <button
              className="bg-black p-1 rounded-md"
              onClick={() => speech(item.word)}
            >
              🔊
            </button>
          </CardHeader>
          <CardBody>
            <p className="capitalize">{item.example}</p>
          </CardBody>
        </Card>
      ))}
    </main>
  );
}
