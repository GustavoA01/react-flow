import { Skeleton } from "@/components/ui/skeleton"
import ReactMarkdown from "react-markdown"

type ChatContentProps = {
  messages: { role: "user" | "assistant"; content: string }[]
  isLoading: boolean
}

export const ChatContent = ({ messages, isLoading }: ChatContentProps) => {
  return (
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
  )
}
