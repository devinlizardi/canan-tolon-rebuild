import { useLoaderData } from "react-router-dom"

const Viewer = () => {
  const id = useLoaderData()
  
  return(
    <>
      { id }
    </>
  )
}

export { Viewer }