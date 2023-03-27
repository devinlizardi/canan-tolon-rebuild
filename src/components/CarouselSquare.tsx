import { useState } from "react"
import { Link } from "react-router-dom"

interface CarouselSquareProps {
  id: number
  to: string
  name: string
  date: string
  gallery?: string
}

const CarouselSquare = ({ id, to, name, date, gallery }: CarouselSquareProps) => {
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

export { CarouselSquare }