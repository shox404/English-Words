type Word = {
  id?: any;
  word: string;
  translate: string;
  example: string;
  know?: boolean;
  ex_tr: string;
};

type WordState = {
  words: Word[][];
  testWord?: Word;
  edit: (data: Word) => Promise<void>;
  get: () => Promise<void>;
  add: (data: Word) => Promise<void>;
  random: () => void;
};

type Bg = {
  colors: string[];
  random: () => void;
};
