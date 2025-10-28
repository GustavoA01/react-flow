import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1>React Flow</h1>
        <div className="flex items-center gap-8">
          <Link to="/activities">Activities</Link>
          <Link to="/">Map</Link>
        </div>
      </div>
    </header>
  )
}