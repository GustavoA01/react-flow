import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import type { QuestionFormType } from '@/data/schemas/activity';
import { Plus } from 'lucide-react';
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
};

export const ChatContent = ({
  messages,
  isLoading,
  formFull,
  isQuestionApplied,
  onApplyQuestion,
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
          <div key={index} className="self-end bg-gray-200 p-2 rounded-md">
            <p className="">{message.content}</p>
          </div>
        );
      }

      const questions = message.questions;

      return (
        <div
          key={index}
          className="self-start bg-gray-100 p-2 rounded-md select-text space-y-3"
        >
          {questions ? (
            questions.map((question, questionIndex) => {
              const applied = isQuestionApplied(index, questionIndex);

              return (
                <div
                  key={questionIndex}
                  className="space-y-2 not-first:border-t not-first:border-gray-200 not-first:pt-3"
                >
                  <ReactMarkdown
                    components={{
                      code(props) {
                        const { children, ...rest } = props;
                        return (
                          <code
                            {...rest}
                            className={'prose prose-sm max-w-none'}
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
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
            })
          ) : (
            <ReactMarkdown
              components={{
                code(props) {
                  const { children, ...rest } = props;
                  return (
                    <code {...rest} className={'prose prose-sm max-w-none'}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
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
