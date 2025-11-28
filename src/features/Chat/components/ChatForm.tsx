import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { SendHorizonal } from "lucide-react"
import type { UseFormRegister } from "react-hook-form"

type ChatFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  register: UseFormRegister<{
    message: string
  }>
}

export const ChatForm = ({ onSubmit, register, isLoading }: ChatFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex px-2 pt-4 space-x-2 border-t max-md:pb-[calc(env(safe-area-inset-bottom)+16px)] rounded-md shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.2)]"
    >
      <Textarea
        disabled={isLoading}
        {...register("message")}
        className="resize-none focus:ring-0 min-h-10 border-0 focus:outline-none shadow-none"
        placeholder={
          isLoading
            ? "Aguarde a resposta..."
            : "Crie perguntas de três níveis sobre..."
        }
      />
      <Button
        className="cursor-pointer mt-auto rounded-full w-10 h-10 "
        type="submit"
      >
        {isLoading ? <Spinner /> : <SendHorizonal />}
      </Button>
    </form>
  )
}
