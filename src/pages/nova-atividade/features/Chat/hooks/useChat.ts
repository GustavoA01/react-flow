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

export const useChat = () => {
  const {
    register,
    handleSubmit,
    reset: resetInput,
  } = useForm<{
    message: string;
  }>();
  const { reset: resetQuestions, getValues } =
    useFormContext<QuestionFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [appliedMessageIndex, setAppliedMessageIndex] = useState<number | null>(
    null
  );

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

  const applyQuestions = (
    questions: QuestionFormType['questions'],
    messageIndex: number
  ) => {
    resetQuestions({ questions });
    setAppliedMessageIndex(messageIndex);
  };

  const clearMessages = () => {
    setMessages([]);
    setAppliedMessageIndex(null);
  };

  return {
    messages,
    isLoading,
    onSubmit,
    register,
    applyQuestions,
    appliedMessageIndex,
    clearMessages,
  };
};
