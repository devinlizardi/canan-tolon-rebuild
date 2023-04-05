import { Route, Routes } from "react-router-dom"
import { Viewer } from "../components/Viewer"
import { SimpleNavbar } from "./../components/SimpleNavbar"
import { Square } from "./../components/Square"
import { Artwork, getAll } from "../services/handleArtwork"
import { useEffect, useState } from "react"

const Work = () => {
  const [art, setArt] = useState<Artwork[]>()
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
    setBoxes(temp)
  }, [])

  // const boxes = []
  // for (let i = 0; i < 40; i++) {
  //   boxes.push(
  //     <Square key={i} to={i.toString()} description="Untitled 8.3, 2013, oil on canvas, 36 x 24 (92 x 61 cm)" />
  //   )
  // }
  // console.log(boxes);
  return (
    <>
      <SimpleNavbar />
      <div className="m-0 w-full place-items-center justify-center grid grid-cols-[minmax(0,_50px)_minmax(auto,_40rem)_minmax(0,_50px)]">
        <div className="row-start-1 col-start-2 h-4" />

        <Routes>
          <Route
            path="/"
            element={
              <div className="row-start-2 col-start-2 flex flex-wrap gap-16 md:gap-4 w-full h-max justify-evenly">
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
