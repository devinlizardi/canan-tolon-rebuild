import { useLoaderData } from "react-router-dom"

const Temp = () => {
  const id = useLoaderData()

  return(
    <>
      { id }
    </>
  )
}

export { Temp }