import { Route, Routes } from "react-router-dom"
import { Viewer } from "../components/Viewer"
import { SimpleNavbar } from "./../components/SimpleNavbar"
import { Square } from "./../components/Square"
import { Artwork, getAll } from "../services/handleArtwork"
import { useEffect, useState } from "react"

const Work = () => {
  const [boxes, setBoxes] = useState<JSX.Element[]>([])

  useEffect(() => {
    const temp: JSX.Element[] = []
    getAll().forEach((elem) => {
      temp.push(
        <Square
          key={elem.id}
          to={elem.id.toString()}
          preview_img={elem.preview_img}
          description={elem.description ? elem.description : ""}
        />
      )
    })
    for (let i = 9; i < 24; i++) {
      temp.push(
        <Square
          key={i}
          to={i.toString()}
          preview_img=""
          description="Untitled 8.3, 2013, oil on canvas, 36 x 24 (92 x 61 cm)"
        />
      )
    }
    setBoxes(temp)
  }, [])

  return (
    <>
      <SimpleNavbar />
      <div className="m-0 place-content-center grid grid-cols-[auto_minmax(auto,_80rem)_auto]">
      <div className="h-16"/>
        <Routes>
          <Route
            path="/"
            element={
              <div className=" justify-self-center row-start-2 col-start-2 flex flex-wrap gap-16 md:gap-4 w-full max-w-[40rem] h-max justify-evenly">
                {boxes}
              </div>
            }
          />
          <Route path="/:id" element={<Viewer routeId="work" />} />
        </Routes>
      </div>
    </>
  )
}

export { Work }
