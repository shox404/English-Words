"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import "./styles.scss";
import { useWords } from "../_store/words";

export default function Admin() {
  const [state, setState] = useState<Word>({
    word: "",
    translate: "",
    example: "",
  });

  const { add } = useWords();

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, [target.id]: target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add(state).then(() => {
      setState({ word: "", translate: "", example: "" });
    });
  };

  return (
    <div className="admin">
      <Card className="card">
        <CardHeader>
          <h1>Create word</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <label htmlFor="word">Word</label>
            <Input
              id="word"
              value={state.word}
              onChange={handleChange}
              required
            />
            <Spacer y={2} />
            <label htmlFor="translate">Translate</label>
            <Input
              id="translate"
              value={state.translate}
              onChange={handleChange}
              required
            />
            <Spacer y={2} />
            <label htmlFor="example">Example</label>
            <Textarea
              id="example"
              value={state.example}
              onChange={handleChange}
              required
            />
            <Spacer y={5} />
            <Button color="secondary" type="submit">
              Create
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
