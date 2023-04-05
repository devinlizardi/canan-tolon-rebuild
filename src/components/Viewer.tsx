import { useEffect, useState } from "react"
import { useRouteLoaderData } from "react-router-dom"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { getAdjacentIds, getArtById, Artwork } from "../services/handleArtwork"
import { CarouselDemo } from "./CarouselDemo"
import { Link } from "react-router-dom"

const Viewer = ({ routeId }: any) => {
  const id = Number(useRouteLoaderData(routeId))
  const [art, setArt] = useState<Artwork>()
  const [adjacentIds, setAdjacentIds] = useState<[number, number]>()

  useEffect(() => {
    try {
      setArt(getArtById(id))
      setAdjacentIds(getAdjacentIds(id))
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  }, [id])

  return (
    <>
      {art && (
        <>
          <div className="row-start-2 col-start-2 w-full h-full">
            <div className="grid place-content-center relative">
              {adjacentIds && (
                <>
                  <Link to={`/${routeId}/${adjacentIds[0].toString()}`} className="absolute top-[calc(50%-1.75rem)] left-0">
                    <span className="sr-only">previous</span>
                    <ChevronLeftIcon className="h-10 w-10 text-gray-300 hover:text-black" />
                  </Link>
                  <Link to={`/${routeId}/${adjacentIds[1].toString()}`} className="absolute top-[calc(50%-1.75rem)] right-0">
                    <span className="sr-only">next</span>
                    <ChevronRightIcon className="h-10 w-10 text-gray-300 hover:text-black" />
                  </Link>
                </>
              )}
              {/* demo art */}
              <div className="h-[35em] w-[30em] bg-contain bg-[#ccc]" />
              <span className="mt-1 text-center opacity-75 font-light">
                <i>{art.description}</i>
              </span>
            </div>
          </div>
          <div className="mt-8 mb-16 row-start-3 col-start-2 w-full">
            <CarouselDemo currentArt={art} routeId={routeId} />
          </div>
        </>
      )}
    </>
  )
}

export { Viewer }
