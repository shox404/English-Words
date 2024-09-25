type Word = {
  id?: any;
  word: string;
  translate: string;
  example: string;
  ex_tr: string;
};

type WordState = {
  words: Word[][];
  edit: (data: Word) => Promise<void>;
  get: () => Promise<void>;
  add: (data: Word) => Promise<void>;
};

type Bg = {
  colors: string[];
  random: () => void;
};
