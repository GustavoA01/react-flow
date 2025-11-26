import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { generateContent } from "@/services/googleConfig"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Skeleton } from "./ui/skeleton"
import { DrawerDescription, DrawerTitle } from "./ui/drawer"
import { Textarea } from "./ui/textarea"

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
      <div className="p-4">
        <DrawerTitle>Gerador de atividades</DrawerTitle>
        <DrawerDescription>Crie atividades usando o chat</DrawerDescription>
      </div>

      <div className="flex-1 space-y-4 py-4 overflow-y-auto overflow-x-hidden flex flex-col px-4 inset-shadow-[0_4px_8px_-4px_rgba(0,0,0,0.2)]">
        {messages.map((message, index) =>
          message.role === "user" ? (
            <div key={index} className="self-end bg-gray-200 p-2 rounded-md">
              <p className="">{message.content}</p>
            </div>
          ) : (
            <div key={index} className="self-start bg-gray-100 p-2 rounded-md">
              <ReactMarkdown
                components={{
                  code(props) {
                    const { children, ...rest } = props
                    return (
                      <code {...rest} className={"prose prose-sm max-w-none"}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )
        )}

        {isLoading && (
          <Skeleton className="flex items-center gap-2 p-4 max-md:w-full">
            <p>Gerando resposta...</p>
          </Skeleton>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex px-2 pt-4 space-x-2 border-t pb-[calc(env(safe-area-inset-bottom)+16px)] rounded-md shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.2)]"
      >
        <Textarea
          className="resize-none focus:ring-0 min-h-10 border-0 flex-1 focus:outline-none shadow-none"
          placeholder="Crie perguntas de três níveis sobre..."
          {...register("message")}
        />
        <Button
          className="cursor-pointer mt-auto rounded-full w-10 h-10 "
          type="submit"
        >
          <SendIcon />
        </Button>
      </form>
    </div>
  )
}
