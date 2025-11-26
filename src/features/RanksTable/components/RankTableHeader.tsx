import { Trophy } from "lucide-react"

export const RankTableHeader = () => {
  return (
    <header className="flex gap-4 items-center pl-2 pt-2 pb-2 bg-primary-light rounded-t-md shrink-0">
      <div className="p-2 w-10 flex justify-center bg-white/10 rounded-lg">
        <Trophy size={20} className="text-yellow-300 fill-yellow-300" />
      </div>
      <div>
        <p className="text-white font-bold">Ranking</p>
        <p className="text-blue-200 font-semibold text-sm">Geral</p>
      </div>
    </header>
  )
}
