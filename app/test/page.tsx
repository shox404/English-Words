"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useWords } from "../_store/words";
import { useEffect, useState } from "react";

export default function Test() {
  const { testWord, words, random } = useWords();
  const [translate, setTranslate] = useState<string>("");

  useEffect(() => {
    random();
  }, [words]);

  const check = () => {
    setTranslate("");
    random();
  };

  return (
    <div className="h-[80dvh] flex justify-center items-center">
      <Card className="w-96">
        <CardHeader>{testWord?.ex_tr}</CardHeader>
        <CardBody>
          <Input
            placeholder="Translate"
            value={translate}
            onChange={(e) => setTranslate(e.target.value)}
          />
          <Spacer y={2} />
          <Button onClick={check}>Check</Button>
        </CardBody>
      </Card>
    </div>
  );
}
