import { create } from "zustand";
import axios from "axios";

export const useWords = create<WordState>((set) => ({
  words: [],
  edit: async (data: Word) => {
    const response = await axios.put(`/api/words/${data.id}`, data);
    set((state) => {
      const updatedWords = state.words.flat().filter((e) => e.id !== data.id);
      updatedWords.push(response.data);
      return { words: [updatedWords] };
    });
  },
  get: async () => {
    const response = await axios.get("/api/words");
    set((state) => (state.words = response.data));
  },
  add: async (data: Word) => {
    const response = await axios.post("/api/words", data);
    set((state) => ({ words: [...state.words, response.data] }));
  },
}));
