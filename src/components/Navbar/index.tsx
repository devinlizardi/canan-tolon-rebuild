import { useState } from "react"
import { NavbarProps } from "./types"

const Navbar = (props: NavbarProps) => {
  const { isThin} = props

  if(isThin) {
    return(
      <>
      <div>
        <h1>small menu</h1>
      </div>
      </>
    )
  } else {
    return(
      <>
      <h1>large menu</h1>
      <ul>
        <li>work</li>
        <li>biography</li>
        <li>exhibitions</li>
        <li>publications</li>
        <li>contact</li>
      </ul>
      </>
    )
  }
}

export { Navbar }
