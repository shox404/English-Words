"use client";

import { useEffect } from "react";
import { useWords } from "./_store/words";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { bg } from "./globals";
import { useRouter } from "next/navigation";

export default function Home() {
  const { words, get } = useWords();
  const router = useRouter();

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
    <main className="min-h-screen grid gap-3 p-3 grid-cols-2 items-baseline">
      {words.map((item, index) => (
        <Card key={index} style={{ background: bg.random() }}>
          <CardBody className="grid gap-2">
            {item.map((item, index) => (
              <Card key={index}>
                <CardHeader className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <h1 className="capitalize text-2xl font-bold">
                      {item.word}
                    </h1>
                    -<h2>{item.translate}</h2>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      className="bg-primary-50 p-1 rounded-md"
                      onClick={() => router.push(`/admin/${item.id}`)}
                    >
                      🖋️
                    </button>
                    <button
                      className="bg-orange-50 p-1 rounded-md"
                      onClick={() => speech(item.word)}
                    >
                      🔊
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="font-semibold">{item.example}</p>
                  <p className="text-xs font-medium">{item.ex_tr}</p>
                </CardBody>
              </Card>
            ))}
          </CardBody>
        </Card>
      ))}
    </main>
  );
}
