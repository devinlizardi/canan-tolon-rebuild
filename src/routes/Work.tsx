import { Route, Routes } from "react-router-dom"
import { Viewer } from "../components/Viewer"
import { SimpleNavbar } from "./../components/SimpleNavbar"
import { Square } from "./../components/Square"

const Work = () => {

  const boxes = []
  for (let i = 0; i < 40; i++) {
    boxes.push(
      <Square
        key={i}
        id={i}
        to={i.toString()}
        name={"Untitled"}
        date="2009"
        gallery="Parasol unit foundation for contemporary art"
      />
    )
  }

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
          <Route path="/:id" element={<Viewer />}/>
        </Routes>
      </div>
    </>
  )
}

export { Work }
