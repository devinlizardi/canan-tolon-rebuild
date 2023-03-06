import { useState } from "react"
import { Link } from "react-router-dom"

interface homeLinkProps {
  grey: string
  color: string
  to: string
  style: string
}

const HomeLink = (props: homeLinkProps) => {
  const { grey, color, to, style } = props
  // const style = `absolute h-auto z-10 left-0 top-32`

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div className={style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Link to={to}>
        {!isHovering ? <img src={grey} className="" /> : <img src={color} className="" />}
      </Link>
    </div>
  )
}

export { HomeLink }
