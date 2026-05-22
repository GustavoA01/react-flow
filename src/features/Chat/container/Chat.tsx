import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../../../components/ui/drawer';
import { ChatContent } from '@/features/Chat/components/ChatContent';
import { ChatForm } from '@/features/Chat/components/ChatForm';
import { useChat } from '../hooks/useChat';

export const Chat = () => {
  const { handleSubmit, isLoading, messages, onSubmit, register } = useChat();

  return (
    <div className="flex flex-col w-full min-h-140 flex-1 pb-6">
      <DrawerHeader className="shadow-[0_4px_8px_-4px_rgba(0,0,0,0.2)]">
        <DrawerTitle>Gerador de atividades</DrawerTitle>
        <DrawerDescription>
          Crie atividades rapidamente usando IA
        </DrawerDescription>
      </DrawerHeader>

      <ChatContent messages={messages} isLoading={isLoading} />

      <ChatForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        isLoading={isLoading}
      />
    </div>
  );
};
