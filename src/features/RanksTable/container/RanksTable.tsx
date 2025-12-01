import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"
import { RankTableHeader } from "@/features/RanksTable/components/RankTableHeader"
import { RanksList } from "@/features/RanksTable/components/RanksList"
import { useMediaDevice } from "@/hooks/useMediaDevice"

const ranks = [
  { position: 1, name: "Gustavo Aguiar", points: 100 },
  { position: 2, name: "Maria Silva", points: 90 },
  { position: 3, name: "João Pereira", points: 80 },
  { position: 4, name: "Ana Costa", points: 70 },
  { position: 5, name: "Carlos Souza", points: 60 },
  { position: 6, name: "Mariana Lima", points: 50 },
  { position: 7, name: "Pedro Alves", points: 40 },
  { position: 8, name: "Juliana Fernandes Moreira Cardoso", points: 30 },
  { position: 9, name: "Rafael Gomes", points: 20 },
  { position: 10, name: "Fernanda Rocha", points: 10 },
  { position: 11, name: "Lucas Martins", points: 5 },
  { position: 12, name: "Beatriz Cardoso", points: 2 },
  { position: 13, name: "Bruno Dias", points: 1 },
  { position: 14, name: "Camila Nunes", points: 0 },
  { position: 15, name: "Diego Barros", points: 0 },
  { position: 16, name: "Elisa Moreira", points: 0 },
]

export const RankTable = () => {
  const { isDesktop } = useMediaDevice()

  if (!isDesktop) {
    return (
      <div
        style={{ maxHeight: "calc(100dvh - 180px)" }}
        className="fixed m-5 z-50 flex flex-col w-80 bg-white border rounded-md shadow-lg"
      >
        <RankTableHeader />
        <div className="flex-1 overflow-y-auto min-h-0 bg-white border-t rounded-b-md">
          <RanksList ranks={ranks} />
        </div>
      </div>
    )
  }

  return (
    <div
      style={{ maxHeight: "calc(100dvh - 180px)" }}
      className="sm:max-h-64 fixed m-5 z-50 flex flex-col w-80 bg-white border rounded-md shadow-lg"
    >
      <Accordion type="single" defaultValue="ranking" collapsible>
        <AccordionItem value="ranking">
          <RankTableHeader />
          <AccordionContent className="p-0">
            <div className="sm:max-h-56 overflow-y-auto ranking-bar min-h-0 bg-white border rounded-b-md">
              <RanksList ranks={ranks} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
