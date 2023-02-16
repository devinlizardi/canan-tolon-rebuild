import { Outlet, Link } from "react-router-dom";
import { HomePageProps } from "./types"

const HomePage = () => {
  
  return(
    <>
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        <li>
          <Link to={'/biography'}>biography</Link>
        </li>
      </ul>
    </>
  )
}

export { HomePage }
