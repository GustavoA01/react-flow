import { GoBack } from "@/components/GoBack"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useMediaDevice } from "@/hooks/useMediaDevice"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

export const CourseHeader = () => {
  const { paddingXlScreens } = useMediaDevice()

  return (
    <header
      className={`px-4 pt-4 sm:px-8 sm:pt-8 bg-blue-puc rounded-b-4xl pb-18 ${paddingXlScreens}`}
    >
      <div className="flex justify-between items-center text-blue-onSurface">
        <GoBack />

        <div className="flex gap-4">
          <Link to="/cursos" className="hover:text-blue-100">
            Cursos
          </Link>
          <Link to="/" className="hover:text-blue-100">
            Mapa
          </Link>
        </div>
      </div>

      <h1 className="font-fredoka text-white font-semibold md:text-4xl text-3xl mt-4 mb-2">
        Matemática
      </h1>

      <div className="flex justify-between items-center">
        <p className=" text-blue-onSurface max-sm:text-sm">
          Professor Davi Martins
        </p>

        <Button className="max-sm:fixed max-sm:rounded-full max-sm:w-12 max-sm:h-12 max-sm:z-10 bottom-10 right-5">
          <p className="hidden sm:block">Novo Módulo</p>{" "}
          <Plus className="sm:hidden rounded-full" />
        </Button>
      </div>

      <Card className="mt-4 p-4 gap-3 bg-blue-900/50 border border-blue-onSurface/30 rounded-lg w-full text-sm">
        <div className="flex justify-between text-center">
          <p className="text-blue-onSurface font-bold text-xs sm:text-sm">
            Progresso do Curso
          </p>
          <p className="text-white text-xs sm:text-sm">50%</p>
        </div>

        <Progress
          barColor="bg-green-400"
          className="bg-primary-dark"
          value={50}
        />
      </Card>
    </header>
  )
}
