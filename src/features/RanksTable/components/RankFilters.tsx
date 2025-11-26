import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { ChevronsUpDown } from "lucide-react"

const items = ["Geral", "Programação", "Matemática e programação avançada"]

type RankFiltersProps = {
  selected: string
  setSelected: (value: string) => void
}

export const RankFilters = ({ selected, setSelected }: RankFiltersProps) => {
  return (
    <Select value={selected} onValueChange={setSelected} defaultValue="Geral">
      <SelectTrigger className="cursor-pointer border-none flex w-10 items-end">
        <ChevronsUpDown className="text-blue-200" />
      </SelectTrigger>

      <SelectContent className="font-fredoka p-0" align="end">
        {items.map((value) => (
          <SelectItem
            key={value}
            value={value}
            className={` py-1 pl-2 border-l-4 border-transparent rounded-l-none [&>span:first-child]:hidden ${
              selected === value
                ? "font-semibold border-l-primary border-l-4 "
                : "hover:border-l-gray-300 hover:border-l-4"
            }`}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
