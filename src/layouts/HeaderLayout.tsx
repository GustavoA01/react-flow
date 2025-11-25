import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

export const HeaderLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}