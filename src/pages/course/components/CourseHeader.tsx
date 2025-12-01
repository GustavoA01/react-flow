import { Progress } from "@/components/ui/progress"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const CourseHeader = () => {
    const navigate = useNavigate()

  return (
<header className="px-4 pt-4 sm:px-8 sm:pt-8 bg-blue-puc rounded-b-3xl pb-12">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center font-semibold text-blue-onSurface hover:text-blue-100 cursor-pointer"
        >
          <ChevronLeft />
          <p>Voltar</p>
        </div>

        <h1 className="font-fredoka text-white font-semibold md:text-4xl text-3xl mt-4 mb-2">
          Matemática
        </h1>
        <p className="text-blue-onSurface max-sm:text-sm">
          Professor Davi Martins
        </p>

        <div className="mt-4 p-4  space-y-1 bg-blue-900/50 rounded-lg w-full text-sm">
          <div className="flex justify-between text-center">
            <p className="text-blue-onSurface font-bold">Progresso do Curso</p>
            <p className="text-white">50%</p>
          </div>
          <Progress
            barColor="bg-green-400"
            className="bg-blue-900"
            value={50}
          />
        </div>
      </header>
  )
}