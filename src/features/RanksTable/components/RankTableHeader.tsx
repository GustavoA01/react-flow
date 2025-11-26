import { Trophy } from "lucide-react"
import { RankFilters } from "./RankFilters"
import { useState } from "react"

export const RankTableHeader = () => {
  const [selected, setSelected] = useState("Geral")

  return (
    <header className="flex items-center justify-between pl-2 pr-4 pt-2 pb-2 bg-primary-light rounded-t-md shrink-0">
      <div className="flex gap-4 items-center">
        <div className="p-2 w-10 flex justify-center bg-white/10 rounded-lg">
          <Trophy size={20} className="text-yellow-300 fill-yellow-300" />
        </div>

        <div>
          <p className="text-white font-bold font-montserrat">Ranking</p>
          <p className="text-blue-200 font-semibold text-sm">{selected}</p>
        </div>
      </div>

      <RankFilters selected={selected} setSelected={setSelected} />
    </header>
  )
}
