type Word = {
  id?: number;
  word: string;
  translate: string;
  example: string;
};

type WordState = {
  words: Word[];
  set: (data: Word[]) => void;
  add: (data: Word) => Promise<void>;
};
