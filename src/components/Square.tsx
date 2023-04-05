import { useState } from "react"
import { Link } from "react-router-dom"

interface SquareProps {
  to: string
  preview_img: string
  description: string
}

const Square = ({ to, preview_img, description }: SquareProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Link
        to={to}
        className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] bg-[#ccc] grid place-content-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] relative">
          <img className="w-full" src={preview_img} />
          {hover && (
            <span className="backdrop-blur-sm absolute top-0 h-full px-4 pt-[calc(50%-2em)] text-center font-light italic text-white">
              {description}
            </span>
          )}
        </div>
      </Link>
    </>
  )
}

export { Square }
