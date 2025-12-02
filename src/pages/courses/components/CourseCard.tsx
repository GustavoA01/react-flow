import { Separator } from "@/components/ui/separator"
import { Badge } from "../../../components/ui/badge"
import { Card } from "../../../components/ui/card"
import { Circle, Folder, Notebook } from "lucide-react"

type CourseCardProps = {
  onClick: () => void
}

export const CourseCard = ({ onClick }: CourseCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group flex flex-col gap-4 p-4 sm:max-w-68 w-full max-md:h-40 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all ease-in"
    >
      <header>
        <Badge className="mb-3 bg-primary-light/20 text-primary-dark">
          Exatas
        </Badge>

        <h1 className="font-bold text-lg group-hover:text-primary">
          Matemática
        </h1>

        <p className="flex items-center text-zinc-500 text-xs sm:text-sm">
          Prof. Davi Martins{" "}
          <span className="p-0 mx-1">
            <Circle size={4} fill="gray" />
          </span>{" "}
          45 alunos
        </p>
      </header>

      <Separator />

      <div className="flex justify-between text-sm max-md:text-xs text-zinc-500 font-medium">
        <div className="flex items-center space-x-1">
          <Folder size={14} />
          <p>5 módulos</p>
        </div>

        <div className="flex items-center space-x-1">
          <Notebook size={14} />
          <p>23 Ativ.</p>
        </div>
      </div>
    </Card>
  )
}
