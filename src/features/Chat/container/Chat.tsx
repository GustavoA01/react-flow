import { ChatContent } from '@/features/Chat/components/ChatContent';
import { ChatForm } from '@/features/Chat/components/ChatForm';
import { useChat } from '../hooks/useChat';
import { useMediaDevice } from '@/hooks/useMediaDevice';
import { ChatHeader } from '../components/ChatHeader';

export const Chat = () => {
  const { isLoading, messages, onSubmit, register } = useChat();
  const { isDesktop } = useMediaDevice();

  return (
    <div className="flex flex-col w-full h-full min-h-0 flex-1 pb-6">
      <ChatHeader isDesktop={isDesktop} onClear={() => {}} />
      <ChatContent messages={messages} isLoading={isLoading} />
      <ChatForm onSubmit={onSubmit} register={register} isLoading={isLoading} />
    </div>
  );
};
