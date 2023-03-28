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
              <h1 className="text-3xl font-semibold pl-14 pb-8 mt-16">SIDESTEPS</h1>
                <div className="row-start-2 col-start-2 flex flex-wrap gap-16 md:gap-4 w-full h-max justify-center md:justify-start">
                  {boxes}
                </div>
              </>
            }
          />
          <Route path="/:exid" element={<Viewer />} />
        </Routes>
      </div>
    </>
  )
}

export { Exhibitions }
