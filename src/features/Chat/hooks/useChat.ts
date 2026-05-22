import { generateContent } from '@/services/googleConfig';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type MessageType = { role: 'user' | 'assistant'; content: string };

export const useChat = () => {
  const methods = useForm<{ message: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const onSubmit = async (data: { message: string }) => {
    methods.reset({
      message: '',
    });
    setIsLoading(true);

    try {
      const response = await generateContent(data.message);
      setMessages([
        ...messages,
        { role: 'user', content: data.message },
        { role: 'assistant', content: response || '' },
      ]);
    } catch (error) {
      console.error('Erro ao gerar conteúdo', error);
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
