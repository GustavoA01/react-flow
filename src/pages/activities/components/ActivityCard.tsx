import { Badge } from "@/components/ui/badge"
import { CompositionCard } from "@/features/Card/container/CompositionCard"
import { Check } from "lucide-react"

export const ActivityCard = () => {
  return (
    <CompositionCard.Root className="border-green-200 border-2 hover:shadow-md">
      <CompositionCard.ContentContainer>
        <div>
          <Check />
        </div>

        <div>
          <CompositionCard.Title title="Regras de derivação" />
          <p className="font-semibold text-xs  text-zinc-400">5 PERGUNTAS</p>
        </div>
      </CompositionCard.ContentContainer>

      <Badge className="font-bold px-2 py-1 text-xs sm:text-sm bg-zinc-100 text-zinc-500">
        + 120 pts
      </Badge>
    </CompositionCard.Root>
  )
}
