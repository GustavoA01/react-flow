import { Trophy } from "lucide-react"
import { Table, TableCell, TableRow } from "./ui/table"

const ranks = [
  { position: 1, name: "Gustavo Aguiar", points: 100 },
  { position: 2, name: "Maria Silva", points: 90 },
  { position: 3, name: "João Pereira", points: 80 },
  { position: 4, name: "Ana Costa", points: 70 },
  { position: 5, name: "Carlos Souza", points: 60 },
  { position: 6, name: "Mariana Lima", points: 50 },
  { position: 7, name: "Pedro Alves", points: 40 },
  { position: 8, name: "Juliana Fernandes", points: 30 },
  { position: 9, name: "Rafael Gomes", points: 20 },
  { position: 10, name: "Fernanda Rocha", points: 10 },
]

export const RankTable = () => {
  return (
    <div className="fixed m-5 z-50 w-80 max-h-64 bg-white border rounded-md shadow-lg">
      <div className="flex gap-4 items-center pl-2 pt-2 pb-2 bg-primary-light rounded-t-md">
        <div>
          <Trophy size={20} className="text-emerald-400" />
        </div>
        <p className="text-white font-bold">Ranking geral</p>
        <p></p>
      </div>
      <div className="overflow-y-auto max-h-64 bg-white border rounded-md">
        <Table>
          {ranks.map((rank) => (
            <TableRow key={rank.position} className="">
              <TableCell>{rank.position}</TableCell>
              <TableCell>{rank.name}</TableCell>
              <TableCell className="text-right">{rank.points} xp</TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    </div>
  )
}
