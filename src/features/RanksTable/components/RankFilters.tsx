import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { ChevronsUpDown } from "lucide-react"
import { useMediaDevice } from "@/hooks/useMediaDevice"

const items = ["Geral", "Programação", "Matemática e programação avançada"]

type RankFiltersProps = {
  selected: string
  setSelected: (value: string) => void
}

export const RankFilters = ({ selected, setSelected }: RankFiltersProps) => {
  const { isDesktop } = useMediaDevice()

  return (
    <Select value={selected} onValueChange={setSelected} defaultValue="Geral">
      <SelectTrigger
        showChevrDownIcon={false}
        className="hover:bg-primary-dark/10 transition-all ease-in shadow-none border-none flex w-10 items-end"
      >
        <ChevronsUpDown className="text-blue-200" />
      </SelectTrigger>

      <SelectContent
        align={isDesktop ? "center" : "end"}
        className="font-fredoka p-0"
      >
        {items.map((value) => (
          <SelectItem
            key={value}
            value={value}
            className={` py-1 pl-2 border-l-4 border-transparent rounded-l-none [&>span:first-child]:hidden ${
              selected === value
                ? "font-semibold border-l-primary border-l-4"
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
