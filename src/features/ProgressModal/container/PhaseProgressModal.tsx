import { DialogContent } from "../../../components/ui/dialog"
import { ModalHeader } from "../components/ModalHeader"
import { BarProgress } from "../components/BarProgress"
import { ModalFooter } from "../components/ModalFooter"

type PhaseProgressModalProps = {
  id: string
  points: number
  minPoints: number
}

export const PhaseProgressModal = ({
  id,
  points,
  minPoints,
}: PhaseProgressModalProps) => {
  let progress = Math.round((points / minPoints) * 100)
  progress = progress > 100 ? 100 : progress

  const concluded = progress === 100

  return (
    <DialogContent
      className={`${
        progress === 100
          ? "bg-linear-to-l from-green-500 to-emerald-600"
          : "bg-linear-to-r from-blue-400 to-indigo-500"
      }`}
    >
      <ModalHeader level={id} concluded={concluded} />

      <div className="bg-white p-4 rounded-md ">
        <BarProgress
          minPoints={minPoints}
          points={points}
          progress={progress}
        />

        <ModalFooter concluded={concluded} />
      </div>
    </DialogContent>
  )
}
