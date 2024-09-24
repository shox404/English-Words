type Word = {
  id?: number;
  word: string;
  translate: string;
  example: string;
};

type WordState = {
  words: Word[];
  set: (data: Word[]) => void;
  get: () => Promise<void>;
  add: (data: Word) => Promise<void>;
};
