import { createBrowserRouter, redirect } from "react-router-dom"
import { Home } from "./routes/Home"
import { Work } from "./routes/Work"
import { Biography } from "./routes/Biography"
import { Exhibitions } from "./routes/Exhibitions"
import { Publications } from "./routes/Publications"
import { Contact } from "./routes/Contact"
import { Temp } from "./components/Temp"
import { Error } from "./routes/Error"

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
