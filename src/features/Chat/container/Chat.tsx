import { useForm } from "react-hook-form"
import { generateContent } from "@/services/googleConfig"
import { useState } from "react"
import { DrawerDescription, DrawerTitle } from "../../../components/ui/drawer"
import { ChatContent } from "@/features/Chat/components/ChatContent"
import { ChatForm } from "@/features/Chat/components/ChatForm"

type MessageType = { role: "user" | "assistant"; content: string }

export const Chat = () => {
  const { register, handleSubmit, reset } = useForm<{ message: string }>()
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([])

  const onSubmit = async (data: { message: string }) => {
    reset({
      message: "",
    })

    setIsLoading(true)
    try {
      const response = await generateContent(data.message)
      setMessages([
        ...messages,
        { role: "user", content: data.message },
        { role: "assistant", content: response || "" },
      ])
    } catch (error) {
      console.error("Erro ao gerar conteúdo", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full min-h-140 flex-1 pb-6 flex flex-col">
      <div className="p-4 shadow-[0_4px_8px_-4px_rgba(0,0,0,0.2)]">
        <DrawerTitle>Gerador de atividades</DrawerTitle>
        <DrawerDescription>Crie atividades usando o chat</DrawerDescription>
      </div>

      <ChatContent messages={messages} isLoading={isLoading} />

      <ChatForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        isLoading={isLoading}
      />
    </div>
  )
}
