import { useState } from "react"
import { Link } from "react-router-dom"

interface SquareProps {
  to: string
  description: string
}

const Square = ({ to, description }: SquareProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div
        className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] bg-[#ccc] grid place-content-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Link to={to} className="h-full w-full p-6">
          {hover && (
            <div className="flex flex-col">
              <span className="italic">{description}</span>
            </div>
          )}
          {!hover && (
            <div className="flex flex-col invisible">
              <span>{description}</span>
            </div>
          )}
        </Link>
      </div>
    </>
  )
}

export { Square }
