import { createBrowserRouter, redirect } from "react-router-dom"
import { Home } from "./Home"
import { Work } from "./Work"
import { Biography } from "./Biography"
import { Exhibitions } from "./Exhibitions"
import { Publications } from "./Publications"
import { Contact } from "./Contact"
import { Temp } from "../components/Temp"
import { Error } from "./Error"

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
    element: <Exhibitions />
  },
  {
    path: "publications",
    element: <Publications />
  },
  {
    path: "contact",
    element: <Contact />
  },
])

export { router }
