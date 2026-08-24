import { ChatContent } from '../components/ChatContent';
import { ChatForm } from '../components/ChatForm';
import { useChat } from '../hooks/useChat';
import { ChatHeader } from '../components/ChatHeader';

export const Chat = () => {
  const { isLoading, messages, onSubmit, register } = useChat();

  return (
    <div className="flex flex-col w-full h-full min-h-0 flex-1 pb-6">
      <ChatHeader onClear={() => {}} />
      <ChatContent messages={messages} isLoading={isLoading} />
      <ChatForm onSubmit={onSubmit} register={register} isLoading={isLoading} />
    </div>
  );
};
