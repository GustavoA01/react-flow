import { DescriptionCircle } from "@/components/DescriptionCircle"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { CardTitle } from "@/features/Card/components/CardTitle"
import { CompositionCard } from "@/features/Card/container/CompositionCard"
import { Check, ChevronRight } from "lucide-react"
import { motion } from "motion/react"

type ModuleCardProps = {
  onClick: () => void
}

export const ModuleCard = ({ onClick }: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
      viewport={{
        once: false,
        margin: "-150px 0px -150px 0px",
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <CompositionCard.Root>
        <CompositionCard.ContentContainer>
          <div className="p-2 bg-green-100 group-hover:bg-green-400 rounded-full transition-colors ease-in">
            <Check className="group-hover:text-white text-green-400 transition-colors ease-in" />
          </div>

          <div>
            <CardTitle title="Introdução" />

            <DescriptionCircle left="3/3 Atividades" right="100%" />
          </div>
        </CompositionCard.ContentContainer>

        <ChevronRight size={16} className="text-zinc-400" />
      </CompositionCard.Root>
      {/* <Item>
        <ItemContent className={`group flex flex-row justify-between items-center py-4 pl-2 pr-4 cursor-pointer mt-4 shadow-sm hover:shadow-md transition-all ease-in`}>
          
          <ItemTitle>Introdução</ItemTitle>
          <ItemDescription>
            <DescriptionCircle left="3/3 Atividades" right="100%" />
          </ItemDescription>
        </ItemContent>
          <ItemActions>
            <ChevronRight size={16} className="text-zinc-400" />
          </ItemActions>
      </Item> */}
    </motion.div>
  )
}
