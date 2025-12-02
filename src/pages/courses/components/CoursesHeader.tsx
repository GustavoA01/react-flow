import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const CoursesHeader = () => {
  return (
    <header className="flex justify-between gap-4">
      <div>
        <h1 className="font-fredoka text-primary-dark font-semibold md:text-2xl text-xl">
          Cursos
        </h1>
        <p className="text-zinc-500 text-sm sm:text-base">
          Selecione a disciplina que você monitora para adicionar atividades
        </p>
      </div>

      <div>
        <Button className="max-sm:w-10 ">
          <Plus />
          <p className="max-sm:hidden">Adicionar Curso</p>
        </Button>
      </div>
    </header>
  )
}
