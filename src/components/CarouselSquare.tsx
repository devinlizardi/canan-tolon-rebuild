import { useState } from "react"
import { Link } from "react-router-dom"

interface CarouselSquareProps {
  to: string
  description?: string
}

const CarouselSquare = ({ to, description }: CarouselSquareProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div
        className="flex-none w-[150px] h-[150px] bg-[#ccc] grid place-content-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Link to={to} className="h-full w-full p-6">
          {hover && (
            <div className="flex flex-col">
              <span>{description}</span>
            </div>
          )}
        </Link>
      </div>
    </>
  )
}

export { CarouselSquare }