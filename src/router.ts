import { createBrowserRouter } from "react-router-dom"
import { HeaderLayout } from "./layouts/HeaderLayout"
import { Map } from "./pages/map"
import { Courses } from "./pages/courses"
import { Rankings } from "./pages/rankings"
import { MedalsPage } from "./pages/medals"
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
      {
        path: "/medalhas",
        Component: MedalsPage,
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
