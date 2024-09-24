import { create } from "zustand";
import axios from "axios";

export const useWords = create<WordState>((set) => ({
  words: [],
  set: (data: any) => set((state: WordState) => (state = data)),
  add: async (data: Word) => {
    const response = await axios.post("/api/words", data);
    set((state) => ({ words: [...state.words, response.data] }));
  },
}));
