import { useLoaderData } from "react-router-dom"

const Temp = () => {
  const id = useLoaderData()

  console.log(id);
  

  return(
    <>
      { id }
    </>
  )
}

export { Temp }