import { createBrowserRouter } from "react-router-dom";
import { Activities } from "./pages/activities";
import { Map } from "./pages/map";
import { HeaderLayout } from "./layouts/HeaderLayout";

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: HeaderLayout,
    children: [
      {
        path: '/',
        Component: Map
      },
      {
        path: '/activities',
        Component: Activities
      }
    ]
  },

])