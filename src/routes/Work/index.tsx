import { WorkProps } from "./types"
import { SimpleNavbar } from "../../components/SimpleNavbar"
import { Outlet, useLoaderData, useNavigation } from "react-router-dom"

const Work = () => {
  const id = useLoaderData() // gets unwrapped res object from fetch
  const navigation = useNavigation() // contains state: "loading" | "submitting"

  return (
    <>
      <SimpleNavbar />
      <div className="m-0 w-full place-items-center justify-center gap-4 grid grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]">
        <div className="prose contents">
          <h1 className="col-start-2 row-start-1 mt-16 mb-0 justify-self-start">work</h1>
          <p className="col-start-2 row-start-2">
            Mauris finibus, mauris interdum dapibus placerat, purus ligula mollis risus, ut scelerisque est velit non
            felis. Etiam tempus interdum nibh et porttitor. Nulla tincidunt leo sed diam venenatis, id lacinia nisl
            tincidunt. Vivamus vestibulum enim quis nulla vulputate, et convallis felis lacinia. Fusce finibus enim vel
            odio semper, ut maximus elit commodo. Morbi rhoncus ex eu tortor lacinia, quis maximus risus porta. Nullam
            at erat turpis. Vivamus dignissim elementum quam tincidunt pretium. Fusce non tristique lorem.
            <br />
            <br />
            Morbi et nunc ornare, fermentum nisl ac, cursus lacus. Praesent tortor ipsum, congue sed neque non,
            condimentum dapibus dui. Maecenas aliquam ex mauris, molestie ornare risus ultrices non. Maecenas fringilla,
            urna quis pretium semper, purus elit fermentum neque, in ullamcorper lectus libero ut nunc. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi efficitur lacus ac gravida
            rhoncus. Curabitur magna tellus, malesuada gravida lacus eu, ullamcorper fermentum orci. Suspendisse laoreet
            neque vitae ante finibus mattis. Sed et vestibulum nisl, ut porttitor mauris. Pellentesque ut ligula at
            sapien ullamcorper porta.
          </p>
        </div>
        <div className="prose contents">
          <h1 className="col-start-2 row-start-3 justify-self-start">Outlet</h1>
          <h1 className="col-start-2 row-start-4 justify-self-start">
            <Outlet />
          </h1>
        </div>
      </div>
    </>
  )
}

export { Work }
