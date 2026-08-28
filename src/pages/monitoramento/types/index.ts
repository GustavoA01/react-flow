import type { RankAluno } from '@/data/temporaryMocks/ranks';
import type {
  AlternativaType,
  QuestaoType,
  TentativaType,
} from '@/data/types/api';

export type AlternativeStatType = {
  alternative: AlternativaType;
  letter: string;
  votes: number;
  percent: number;
  isDistractor: boolean;
};

export type QuestionStatType = {
  question: QuestaoType;
  number: number;
  accuracyPercent: number;
  alternativeStats: AlternativeStatType[];
};

export type StudentRowType = {
  student: RankAluno;
  attempt?: TentativaType;
  answersByQuestion: (string | null)[];
};
