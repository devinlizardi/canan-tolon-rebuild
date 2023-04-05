import { useState } from "react"
import { Link } from "react-router-dom"

interface SquareProps {
  to: string
  preview_img: string
  description?: string
}

const CarouselSquare = ({ to, preview_img, description }: SquareProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Link
        to={to}
        className="w-[150px] h-[150px] bg-[#ccc] grid place-content-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="w-[150px] h-[150px] relative overflow-clip">
          <img className="w-full" src={preview_img} />
          {hover && (
            <span className="backdrop-blur-sm absolute top-0 h-full px-4 pt-[calc(50%-3em)] text-center font-light italic text-white">
              {description}
            </span>
          )}
        </div>
      </Link>
    </>
  )
}

export { CarouselSquare }
