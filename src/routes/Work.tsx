import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import { SimpleNavbar } from "./../components/SimpleNavbar"
import { Square } from "./../components/Square"

const Work = () => {
  const id = useLoaderData() // gets unwrapped res object from fetch
  const navigation = useNavigation() // contains state: "loading" | "submitting"

  const boxes = []
  for (let i = 0; i < 100; i++) {
    boxes.push(<Square key={i}/>)
  }

  return (
    <>
      <SimpleNavbar />
      <div className="m-0 w-full place-items-center justify-center gap-4 grid grid-cols-[minmax(0,_50px)_minmax(auto,_50rem)_minmax(0,_50px)]">
        <div className="row-start-1 col-start-2 h-[2vh]"/>
        <div className="row-start-2 col-start-2 flex flex-wrap gap-4 w-full h-screen justify-evenly">
          {boxes}
        </div>
      </div>
    </>
  )
}

export { Work }
