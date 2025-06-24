import React from 'react'

function Navbar() {
  return (
    <nav className='w-[100vw] bg-blue-300 h-20 mb-2 sticky top-0'>
      <ul className='flex justify-around p-5 '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
