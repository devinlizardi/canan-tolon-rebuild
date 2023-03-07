import { useState } from "react"
import { Link } from "react-router-dom"

interface homeLinkProps {
  grey: string
  color: string
  to: string
}

const HomeLink = (props: homeLinkProps) => {
  const { grey, color, to } = props

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to={to}>
      {!isHovering ? <img className="h-fill" src={grey} /> : <img src={color} />}
    </Link>
  )
}

export { HomeLink }
