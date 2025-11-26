import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Crown, Medal } from "lucide-react"
import { ChessQueen } from "./ChessQueen"

type RanksListProps = {
  ranks: { position: number; name: string; points: number }[]
}

const topRanksIcons = [
  <Crown className="text-emerald-500 fill-emerald-500" />,
  <ChessQueen color="gray" />,
  <Medal className="text-amber-700" />,
]

export const RanksList = ({ ranks }: RanksListProps) => {
  return (
    <Table>
      <TableBody>
        {ranks.map(({ position, points, name }) => {
          const isTopRanks = [1, 2, 3].includes(position)

          return (
            <TableRow key={position} className="h-15 font-montserrat">
              <TableCell className="text-center w-10 font-bold text-gray-400">
                {isTopRanks ? topRanksIcons[position - 1] : `${position}°`}
              </TableCell>

              <TableCell
                className={`font-semibold ${
                  isTopRanks ? "text-black" : "text-zinc-600"
                }`}
              >
                {name}
              </TableCell>

              <TableCell className="text-center">
                <span
                  className={`font-bold ${
                    position === 1 ? "text-emerald-500" : "text-blue-600"
                  }`}
                >
                  {points}{" "}
                </span>
                <span className="font-semibold text-zinc-400">xp</span>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
