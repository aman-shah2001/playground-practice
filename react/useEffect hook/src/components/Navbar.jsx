import { useEffect } from "react"
import React from 'react'



function Navbar({color}) {
   useEffect(() => {
    alert("color was changed")
  }, [color])
  return (
    <div>
      I am a navbar of {color} color
    </div>
  )
}

export default Navbar
