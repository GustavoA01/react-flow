import { useMediaDevice } from "@/hooks/useMediaDevice"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const GoBack = () => {
  const {isDesktop} = useMediaDevice()
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(-1)}
      className="flex gap-2 items-center font-semibold hover:text-blue-100 max-sm:text-sm cursor-pointer"
    >
      <ChevronLeft size={!isDesktop ? 18 : 24} />
      <p>Voltar</p>
    </div>
  )
}
