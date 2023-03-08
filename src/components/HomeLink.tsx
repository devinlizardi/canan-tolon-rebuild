import { useState } from "react"
import { Link } from "react-router-dom"

interface homeLinkProps {
  hover: boolean
  handleMouseOver: () => void
  handleMouseOut: () => void
  grey: string
  color: string
  to: string
  className?: string
}

const HomeLink = (props: homeLinkProps) => {
  const { hover, handleMouseOver, handleMouseOut, grey, color, to, className } = props

  return (
    <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to={to}>
      {!hover ? <img className={className} src={grey} /> : <img className={className} src={color} />}
    </Link>
  )
}

export { HomeLink }
