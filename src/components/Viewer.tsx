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
            <div className="grid place-content-center">
              
              <div className="relative">
                <img src={art.full_img} className="px-4 sm:px-10" />
                {adjacentIds && (
                <div className="z-30 ">
                  <Link
                    to={`/${routeId}/${adjacentIds[0].toString()}`}
                    className="hidden sm:block absolute top-[calc(50%-1.25rem)] left-0"
                  >
                    <span className="sr-only">previous</span>
                    <ChevronLeftIcon className="h-10 w-10 text-gray-300 hover:text-black" />
                  </Link>
                  <Link
                    to={`/${routeId}/${adjacentIds[1].toString()}`}
                    className="hidden sm:block absolute top-[calc(50%-1.25rem)] right-0"
                  >
                    <span className="sr-only">next</span>
                    <ChevronRightIcon className="h-10 w-10 text-gray-300 hover:text-black" />
                  </Link>
                </div>
              )}
              </div>
            </div>
          </div>
          <span className="justify-self-center mt-4 mb-8 col-start-2 row-start-3 w-fit h-fit text-center px-10 italic font-light text-sm md:text-base">
            {art.description}
          </span>
          <div className="justify-self-center mb-16 row-start-4 col-start-2 w-[75vw] max-w-4xl">
            <CarouselDemo currentArt={art} routeId={routeId} />
          </div>
        </>
      )}
    </>
  )
}

export { Viewer }
