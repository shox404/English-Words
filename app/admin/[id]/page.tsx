"use client";

import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import { useWords } from "@/app/_store/words";
import { wordSchema } from "@/app/globals";

export default function Admin() {
  const [state, setState] = useState<Word>(wordSchema);
  const { id } = useParams();
  const { edit, words, get } = useWords();
  const router = useRouter();

  useEffect(() => {
    get().then(() => {
      const i = words.flat().find((e) => e.id == id);
      const data: Word = i ? i : wordSchema;
      setState(data);
    });
  }, []);

  const change = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, [target.id]: target.value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await edit(state).then(() => {
      setState(wordSchema);
      router.push("/");
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96 p-5">
        <CardHeader>
          <h1 className="font-semibold text-xl">Edit word</h1>
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
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
