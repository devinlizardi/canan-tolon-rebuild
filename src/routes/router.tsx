import { Home } from "./Home"
import { Error } from "./Error"
import { Work } from "./Work"
import { Biography } from "./Biography"
import { Temp } from "../components/Temp"
import { createBrowserRouter, redirect } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "work",
    element: <Work />,
    children: [
      {
        path: ":id",
        loader: async ({ params }: any) => {
          // return await fetch(`./${params.id}`)
          return params.id
        },
        action: async ({ request }) => {
          const formData = await request.formData()
          const nextArt = await fetch(`./${formData.get}`)
          return redirect(`/work/${nextArt}`)
        },
        element: <Temp />,
      },
    ],
  },
  {
    path: "biography",
    element: <Biography />,
  },
  {
    path: "exhibitions",
  },
  {
    path: "publications",
  },
  {
    path: "contact",
  },
])

export { router }
