import { create } from "zustand";
import axios from "axios";
import { wordSchema } from "../globals";

export const useWords = create<WordState>((set) => ({
  words: [],
  filter: "",
  testWord: wordSchema,
  edit: async (data: Word) => {
    const response = await axios.put(`/api/words/${data.id}`, data);
    set((state) => {
      const updatedWords = state.words.flat().filter((e) => e.id !== data.id);
      updatedWords.push(response.data);
      return { words: [updatedWords] };
    });
  },
  setFilter: (value: string) => {
    set(() => ({ filter: value }));
  },
  get: async () => {
    const response = await axios.get("/api/words");
    set(() => ({ words: response.data }));
  },
  add: async (data: Word) => {
    const response = await axios.post("/api/words", data);
    set((state) => ({ words: [...state.words, [response.data]] }));
  },
  random: () => {
    set((state) => {
      const flattenedWords = state.words.flat();
      const randomWord =
        flattenedWords[Math.floor(Math.random() * flattenedWords.length)];
      return { testWord: randomWord };
    });
  },
}));
