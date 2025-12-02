import { Card } from "@/components/ui/card"
import { Check, ChevronRight, Circle } from "lucide-react"
import { motion } from "motion/react"

export const ModuleCard = () => {

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
      viewport={{
        once:false,
        margin: "-150px 0px -150px 0px"
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group flex flex-row justify-between items-center py-4 pl-2 pr-4 cursor-pointer mt-4 shadow-sm hover:shadow-md transition-all ease-in">
        <div className="flex items-center gap-4 pl-2">
          <div className="p-2 bg-green-100 group-hover:bg-green-400 rounded-full transition-colors ease-in">
            <Check className="group-hover:text-white text-green-400 transition-colors ease-in" />
          </div>

          <div>
            <h2 className="font-semibold sm:text-lg">Introdução</h2>

            <div className="flex text-xs sm:text-sm items-center gap-1 text-zinc-500">
              3/3 Ativiades{" "}
              <span>
                <Circle size={4} fill="gray" />
              </span>{" "}
              100%
            </div>
          </div>
        </div>

        <ChevronRight size={16} className="text-zinc-400" />
      </Card>
    </motion.div>
  )
}
