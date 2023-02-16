import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="m-0 w-full place-items-center justify-center gap-4 grid grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]">
        <article className="prose contents">
          <h1 className="row-start-2 col-start-2 m-0">home page</h1>
          <ul className="row-start-3 col-start-2">
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/work"}>work</Link>
            </li>
          </ul>
        </article>
      </div>
    </>
  )
}

export { Home }
