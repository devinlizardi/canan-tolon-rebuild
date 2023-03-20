import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getAll, Artwork } from "../services/handleArtwork"

const Viewer = () => {
  const id = useLoaderData()
  const [art, setArt] = useState<Artwork>()

  useEffect(() => {
    try {
      if (typeof id == "string") {
        setArt(getAll()[Number(id)])
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  }, [])

  return (
    <>
      <div className="row-start-2 col-start-2 w-full h-full">
        {art && (
          <div className="grid place-content-center">
            <div className="h-[35em] w-[30em] bg-[#ccc]" />
            <span className="mt-1 text-center opacity-75 font-light">
              <i>{art.name}</i>, {art.year}, {art.materials} {art.size}
            </span>
          </div>
        )}
      </div>
      <div className="my-16 row-start-3 col-start-2 bg-[#ccc] w-full h-24">

      </div>
    </>
  )
}

export { Viewer }
