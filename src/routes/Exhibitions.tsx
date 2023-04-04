import { Routes, Route } from "react-router-dom"
import { SimpleNavbar } from "../components/SimpleNavbar"
import { Square } from "../components/Square"
import { Viewer } from "../components/Viewer"

const Exhibitions = () => {
  const boxes = []
  for (let i = 0; i < 3; i++) {
    boxes.push(<Square key={i} id={i} to={i.toString()} name={"SIDESTEPS"} date="2014" gallery="" />)
  }
  return (
    <>
      <SimpleNavbar />
      <div className="w-full place-content-center grid grid-cols-[minmax(0,_50px)_minmax(auto,_40rem)_minmax(0,_50px)]">
        <div className="row-start-1 col-start-2 h-4" />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative row-start-2 col-start-2 flex flex-wrap gap-16 py-16 mt-6 md:gap-4 w-full h-max justify-center text-left md:justify-start">
                  <h1 className="text-3xl font-semibold absolute -top-4">SIDESTEPS</h1>
                  {boxes}
                </div>
                <div className="relative row-start-3 col-start-2 flex flex-wrap gap-16 py-16 md:gap-4 w-full h-max justify-center text-left md:justify-start">
                  <h1 className="text-3xl font-semibold absolute -top-4">TIME AFTER TIME</h1>
                  {boxes}
                </div>
                <div className="relative row-start-4 col-start-2 flex flex-wrap gap-16 py-16 md:gap-4 w-full h-max justify-center text-left md:justify-start">
                  <h1 className="text-3xl font-semibold absolute -top-4">PRECAUTION & LOSS</h1>
                  {boxes}
                </div>
                <div className="relative row-start-5 col-start-2 flex flex-wrap gap-16 py-16 md:gap-4 w-full h-max justify-center text-left md:justify-start">
                  <h1 className="text-3xl font-semibold absolute -top-4">COLONIES</h1>
                  {boxes}
                </div>
              </>
            }
          />
          <Route path="/:id" element={<Viewer routeId="exhibitions" />} />
        </Routes>
      </div>
    </>
  )
}

export { Exhibitions }
