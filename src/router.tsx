import { createBrowserRouter, redirect } from "react-router-dom"
import { Home } from "./routes/Home"
import { Work } from "./routes/Work"
import { Biography } from "./routes/Biography"
import { Exhibitions } from "./routes/Exhibitions"
import { Publications } from "./routes/Publications"
import { Contact } from "./routes/Contact"
import { Error } from "./routes/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "work/*",
    element: <Work />,
    loader: async ({ params }: any) => {
      const id = Object.keys(params)[0] 
      return params[id]
    },
  },
  {
    path: "biography",
    element: <Biography />,
  },
  {
    path: "exhibitions",
    element: <Exhibitions />,
  },
  {
    path: "publications",
    element: <Publications />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
])

export { router }
