import { generateContent } from '@/services/googleConfig';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type MessageType = { role: 'user' | 'assistant'; content: string };

export const useChat = () => {
  const methods = useForm<{ message: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const onSubmit = async (data: { message: string }) => {
    const userMessage = data.message;

    methods.reset({ message: '' });
    setIsLoading(true);

    try {
      const response = await generateContent(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: response || '' },
      ]);
    } catch (error) {
      console.error('Erro ao gerar conteúdo', error);
      setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    onSubmit,
    register: methods.register,
    handleSubmit: methods.handleSubmit,
  };
};
