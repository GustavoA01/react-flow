import { createBrowserRouter } from "react-router-dom"
import { Courses } from "./pages/courses"
import { Map } from "./pages/map"
import { HeaderLayout } from "./layouts/HeaderLayout"
import { Rankings } from "./pages/rankings"
import { CoursePage } from "./pages/course"
import { Activities } from "./pages/activities"

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: HeaderLayout,
    children: [
      {
        path: "/",
        Component: Map,
      },
      {
        path: "/cursos",
        Component: Courses,
      },
      {
        path: "/rankings",
        Component: Rankings,
      },
    ],
  },
  {
    path: "/curso",
    Component: CoursePage,
  },
  {
    path: "/atividades",
    Component: Activities,
  },
])
