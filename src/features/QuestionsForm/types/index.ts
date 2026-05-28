export type AlternativesProps = {
  isTwoAlternatives: boolean;
  correctALternative: string;
  setCorrectAlternative: (val: string) => void;
  questionNumber: number;
};

export type InputOptionsProps = {
  alternativeNumber: number;
  questionNumber: number;
};
