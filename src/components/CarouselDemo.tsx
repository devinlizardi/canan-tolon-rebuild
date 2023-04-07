import { useEffect, useState } from "react"
import { getAll, Artwork } from "./../services/handleArtwork"
import { CarouselSquare } from "./CarouselSquare"

interface CarouselProps {
  currentArt: Artwork
  routeId: string
}

const CarouselDemo = ({ currentArt, routeId }: CarouselProps) => {
  const [allArt, setAllArt] = useState<Artwork[]>()
  useEffect(() => {
    try {
      setAllArt(getAll())
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }, [])

  return (
    <>
      <div className="flex gap-1 overflow-x-scroll overflow-y-clip pb-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {allArt?.map((elem) => (
          <CarouselSquare
            key={elem.id}
            preview_img={elem.preview_img}
            to={`/${routeId}/${elem.id.toString()}`}
            description={elem.description}
          />
        ))}
      </div>
    </>
  )
}

export { CarouselDemo }
