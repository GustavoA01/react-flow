import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import type { QuestionFormType } from '@/data/schemas/activity';
import { ListChecks, Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { formatQuestionMessage } from '../utils/formatQuestionsMessage';
import type { ChatMessageType } from '../hooks/useChat';

type ChatContentProps = {
  messages: ChatMessageType[];
  isLoading: boolean;
  formFull: boolean;
  isQuestionApplied: (messageIndex: number, questionIndex: number) => boolean;
  onApplyQuestion: (
    question: QuestionFormType['questions'][number],
    messageIndex: number,
    questionIndex: number
  ) => void;
  onApplyAllQuestions: (
    questions: QuestionFormType['questions'],
    messageIndex: number
  ) => void;
};

export const ChatContent = ({
  messages,
  isLoading,
  formFull,
  isQuestionApplied,
  onApplyQuestion,
  onApplyAllQuestions,
}: ChatContentProps) => (
  <div className="flex-1 space-y-4 py-4 overflow-y-auto overflow-x-hidden flex flex-col px-4 ">
    {messages.length === 0 && (
      <div className="m-auto">
        <p className="text-sm text-gray-500">
          Peça perguntas para o gerador de atividades
        </p>
      </div>
    )}

    {messages.map((message, index) => {
      if (message.role === 'user') {
        return (
          <div key={index} className="self-end bg-gray-200 p-2 rounded-md rounded-tr-none">
            <p>{message.content}</p>
          </div>
        );
      }

      const questions = message.questions;
      const allApplied = questions
        ? questions.every((_, questionIndex) =>
            isQuestionApplied(index, questionIndex)
          )
        : false;

      return (
        <div
          key={index}
          className="self-start bg-gray-100 p-2 rounded-md rounded-tl-none select-text space-y-3"
        >
          {questions ? (
            <>
              {questions.length > 1 && (
                <Button
                  size="sm"
                  type="button"
                  variant="outline"
                  disabled={formFull || allApplied}
                  onClick={() => onApplyAllQuestions(questions, index)}
                >
                  <ListChecks />
                  {allApplied ? 'Adicionadas' : 'Adicionar todas'}
                </Button>
              )}
              {questions.map((question, questionIndex) => {
                const applied = isQuestionApplied(index, questionIndex);

                return (
                  <div
                    key={questionIndex}
                    className={
                      questions.length > 1
                        ? 'space-y-2 border-t border-gray-200 pt-3'
                        : 'space-y-2'
                    }
                  >
                    <ReactMarkdown>
                      {formatQuestionMessage(question, questionIndex)}
                    </ReactMarkdown>
                    <Button
                      size="sm"
                      type="button"
                      disabled={applied || formFull}
                      onClick={() =>
                        onApplyQuestion(question, index, questionIndex)
                      }
                    >
                      <Plus />
                      {applied ? 'Adicionada' : 'Adicionar'}
                    </Button>
                  </div>
                );
              })}
            </>
          ) : (
            <ReactMarkdown>{message.content}</ReactMarkdown>
          )}
        </div>
      );
    })}

    {isLoading && (
      <Skeleton className="flex items-center gap-2 p-4 max-md:w-full">
        <p>Gerando resposta...</p>
      </Skeleton>
    )}
  </div>
);
