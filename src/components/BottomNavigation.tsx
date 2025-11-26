import { Map, NotebookPen, Trophy } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const buttons = [
  {
    icon: <NotebookPen />,
    to: "/activities",
  },
  {
    icon: <Map />,
    to: "/",
  },
  {
    icon: <Trophy />,
    to: "/rankings",
  },
]

export const BottomNavigation = () => {
  const { pathname } = useLocation()

  return (
    <div className="fixed bottom-3 items-center w-50 self-center rounded-full gap-6 bg-white shadow-md py-2 flex justify-center sm:hidden">
      {buttons.map((button) => {
        const selected = pathname === button.to
        return (
          <div
            key={button.to}
            className={`${
              selected
                ? "bg-primary text-white rounded-full p-3 transition ease-in duration-300"
                : "bg-white text-zinc-400"
            }`}
          >
            <Link to={button.to}>{button.icon}</Link>
          </div>
        )
      })}
    </div>
  )
}
