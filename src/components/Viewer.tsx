import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { artwork } from "./../public/demo_images.json"

interface Artwork {
  id: number
  img: string // should be URL
  name: string
  year: string
  materials?: string
  size?: string
  medium?: string
  gallery?: string
  country?: string
}

const Viewer = () => {
  const id = useLoaderData()
  const [art, setArt] = useState<Artwork>()

  useEffect(() => {
    try {
      if (typeof id == "string") {
        setArt(artwork[Number(id)])
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
    </>
  )
}

export { Viewer }
