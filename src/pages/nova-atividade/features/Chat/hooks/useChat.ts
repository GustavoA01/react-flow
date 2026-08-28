import type { QuestionFormType } from '@/data/schemas/activity';
import { generateContent } from '@/services/googleConfig';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { CHAT_SYSTEM_INSTRUCTION } from '../utils/constants';
import { formatQuestionsMessage } from '../utils/formatQuestionsMessage';
import { parseGeneratedQuestions } from '../utils/parseGeneratedQuestions';

export type ChatMessageType = {
  role: 'user' | 'assistant';
  content: string;
  questions?: QuestionFormType['questions'];
};

const appliedKey = (messageIndex: number, questionIndex: number) =>
  `${messageIndex}-${questionIndex}`;

export const useChat = () => {
  const {
    register,
    handleSubmit,
    reset: resetInput,
  } = useForm<{
    message: string;
  }>();
  const { getValues, setValue, watch } = useFormContext<QuestionFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [appliedQuestionKeys, setAppliedQuestionKeys] = useState<string[]>([]);

  const formQuestions = watch('questions');
  const formFull =
    !!formQuestions?.length &&
    formQuestions.every((question) => question.statement.trim() !== '');

  const onSubmit = handleSubmit(async (data: { message: string }) => {
    const userMessage = data.message;

    resetInput({ message: '' });
    setIsLoading(true);

    try {
      const qtdQuestions = getValues('questions')?.length;
      const prompt =
        qtdQuestions > 0
          ? `${userMessage}\n\n(A atividade atual tem ${qtdQuestions} pergunta(s). Se o usuário não pedir outra quantidade, gere exatamente ${qtdQuestions}.)`
          : userMessage;

      const response = await generateContent(prompt, CHAT_SYSTEM_INSTRUCTION);
      const questions = parseGeneratedQuestions(response || '');
      const content = questions
        ? formatQuestionsMessage(questions)
        : 'Não consegui organizar as perguntas no formato da atividade. Tente de novo, por exemplo: “crie 3 perguntas sobre listas”.';

      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content, questions: questions ?? undefined },
      ]);
    } catch (error) {
      console.error('Erro ao gerar conteúdo', error);
      setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    } finally {
      setIsLoading(false);
    }
  });

  const applyQuestion = (
    question: QuestionFormType['questions'][number],
    messageIndex: number,
    questionIndex: number
  ) => {
    const slots = getValues('questions') ?? [];
    const emptyIndex = slots.findIndex((slot) => !slot.statement.trim());
    if (emptyIndex === -1) return;

    setValue(`questions.${emptyIndex}`, question, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setAppliedQuestionKeys((prev) => [
      ...prev,
      appliedKey(messageIndex, questionIndex),
    ]);
  };

  const isQuestionApplied = (messageIndex: number, questionIndex: number) =>
    appliedQuestionKeys.includes(appliedKey(messageIndex, questionIndex));

  const clearMessages = () => {
    setMessages([]);
    setAppliedQuestionKeys([]);
  };

  return {
    messages,
    isLoading,
    onSubmit,
    register,
    applyQuestion,
    isQuestionApplied,
    formFull,
    clearMessages,
  };
};
