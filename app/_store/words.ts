import { create } from "zustand";

const useWords = create((set) => ({
  words: [] as Word[],
  add: (data: Word) => set((state: WordState) => state.words.push(data)),
}));
