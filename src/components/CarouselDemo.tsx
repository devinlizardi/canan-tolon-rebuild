import { useEffect, useState } from "react"
import { getAll, Artwork } from "./../services/handleArtwork"
import { CarouselSquare } from "./CarouselSquare"

interface CarouselProps {
  currentArt: Artwork
}

const CarouselDemo = ({ currentArt }: CarouselProps) => {
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
            id={elem.id}
            to={`/work/${elem.id.toString()}`}
            name={elem.name}
            date={elem.year}
            gallery={elem.gallery}
          />
        ))}
      </div>
    </>
  )
}

export { CarouselDemo }
