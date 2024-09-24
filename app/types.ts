type Word = {
  id?: number;
  word: string;
  translate: string;
  example: string;
};

type WordState = {
  words: Word[];
};
