import { Home } from "./Home"
import { Error } from "./Error"
import { Work } from "./Work"
import { Biography } from "./Biography"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/work",
    element: <Work />,
    children: [
      {
        path: "work/:id",
        loader: ({ params }: any) => {
          console.log(params.id)
        },
      },
    ],
  },
  {
    path: "/biography",
    element: <Biography />
  },
  {
    path: "/exhibitions",
  },
  {
    path: "/publications",
  },
  {
    path: "/contact",
  },
])

export { router }
