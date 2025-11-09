import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { generateContent } from "@/services/googleConfig"
import { useState } from "react"
import ReactMarkdown from "react-markdown"

export const Chat = () => {
  const { register, handleSubmit } = useForm<{ message: string }>()
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([])

  const onSubmit = async (data: { message: string }) => {
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
    <Card className="w-full min-h-130 h-130">
      <CardHeader>
        <CardTitle>Gerador de atividades</CardTitle>
        <CardDescription>Crie atividades usando o chat</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 overflow-y-auto overflow-x-hidden flex flex-col">
          {messages.map((message, index) =>
            message.role === "user" ? (
              <div key={index} className="flex items-center gap-2">
                <Avatar className="self-start">
                  <AvatarFallback>{"U"}</AvatarFallback>
                  <AvatarImage src={"https://github.com/GustavoA01.png"} />
                  <p>Você</p>
                </Avatar>
                <p>{message.content}</p>
              </div>
            ) : (
              <div key={index} className="flex flex-wrap items-center gap-2">
                <Avatar className="self-start">
                  <AvatarFallback>{"A"}</AvatarFallback>
                  <AvatarImage src={"https://github.com/shadcn.png"} />
                </Avatar>
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
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>{"A"}</AvatarFallback>
                <AvatarImage src={"https://github.com/shadcn.png"} />
              </Avatar>
              <p>Gerando resposta...</p>
            </div>
          )}
      </CardContent>
      <CardFooter className="space-x-2">
        <Input
          className="overflow-y-auto"
          placeholder="Digite sua mensagem"
          {...register("message")}
        />
        <Button
          className="cursor-pointer"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          <SendIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
