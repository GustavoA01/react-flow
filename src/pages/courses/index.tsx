import { CourseCard } from "@/components/CourseCard"

export const Courses = () => {
  return (
    <div className="p-4">
      <header>
        <h1 className="font-fredoka text-primary-dark font-semibold md:text-2xl text-xl">
          Cursos
        </h1>
        <p className="text-zinc-500 text-sm md:text-base">
          Selecione a disciplina que você monitora para adicionar atividades
        </p>
      </header>

      <div className="flex mt-8 space-x-8 space-y-4 max-md:flex-col">
        <CourseCard/>
      </div>
    </div>
  )
}
