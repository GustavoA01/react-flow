import type { ReactNode } from 'react';
import { FooterAnswering } from './FooterAnswering';
import { FooterFeedback } from './FooterFeedback';
import type { QuizFooterPropsType, QuizPhaseType } from '../../types';

const footerByPhase: Record<
  QuizPhaseType,
  (props: QuizFooterPropsType) => ReactNode
> = {
  answering: FooterAnswering,
  feedback: FooterFeedback,
  summary: () => null,
};

export const QuizFooter = (props: QuizFooterPropsType) =>
  footerByPhase[props.phase](props);
