import { Separator } from "@/components/ui/separator"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Folder, Notebook } from "lucide-react"

export const CourseCard = () => {
  return (
    <Card className="group p-4 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all ease-in">
      <header>
        <Badge className="mb-3 bg-primary-light/20 text-primary-dark">
          Exatas
        </Badge>

        <h1 className="font-bold text-lg group-hover:text-primary">
          Matemática
        </h1>
        <p className="text-zinc-500 text-sm">Prof. Davi Martins - 45 alunos</p>
      </header>

      <Separator />
      
      <div className="flex justify-between text-sm text-zinc-500 font-medium">
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
