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
import { useWords } from "../_store/words";

export default function Admin() {
  const [state, setState] = useState<Word>({
    word: "",
    translate: "",
    example: "",
    ex_tr: "",
  });

  const { add } = useWords();

  const change = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, [target.id]: target.value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add(state).then(() => {
      setState({ word: "", translate: "", example: "", ex_tr: "" });
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96 p-5">
        <CardHeader>
          <h1 className="font-semibold text-xl">Create word</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={submit}>
            <label htmlFor="word">Word</label>
            <Input id="word" value={state.word} onChange={change} required />
            <Spacer y={2} />
            <label htmlFor="translate">Translate</label>
            <Input
              id="translate"
              value={state.translate}
              onChange={change}
              required
            />
            <Spacer y={2} />
            <label htmlFor="example">Example</label>
            <Textarea
              id="example"
              value={state.example}
              onChange={change}
              required
            />
            <Spacer y={2} />
            <label htmlFor="example">Translate</label>
            <Textarea
              id="ex_tr"
              value={state.ex_tr}
              onChange={change}
              required
            />
            <Spacer y={5} />
            <Button color="secondary" type="submit" className="w-full">
              Create
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
