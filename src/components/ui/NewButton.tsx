import { Plus } from "lucide-react"
import { Button } from "./button"

type NewButtonProps = {
  text: string
  onClick: () => void
}

export const NewButton = ({ text, onClick }: NewButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="max-sm:fixed max-sm:rounded-full max-sm:w-12 max-sm:h-12 max-sm:z-10 bottom-10 right-5"
    >
      <p className="hidden sm:block">{text}</p>{" "}
      <Plus className="sm:hidden rounded-full" />
    </Button>
  )
}
