import { useState } from "react"
import { Link } from "react-router-dom"

interface SquareProps {
  to: string
  name: string
  date: string
  gallery?: string
}

const Square = ({ to, name, date, gallery }: SquareProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div
        className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] bg-[#ccc] hover:ring-4 ring-[#a7a7a7] ring-inset grid place-content-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Link to={to} className="h-full w-full p-6">
          {hover && (
            <div className="flex flex-col">
              <span><i>{name}</i>, {date}</span>
              <br />
              <h2 className="opacity-75">{gallery}</h2>
            </div>
          )}
        </Link>
      </div>
    </>
  )
}

export { Square }
