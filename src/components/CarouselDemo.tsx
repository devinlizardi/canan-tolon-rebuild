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
      <div className="flex gap-4 overflow-x-scroll overflow-y-clip scrollbar-hide">
        {allArt?.map((elem) => (
          <CarouselSquare
            key={elem.id}
            to={`/${routeId}/${elem.id.toString()}`}
            description={elem.description}
          />
        ))}
      </div>
    </>
  )
}

export { CarouselDemo }
