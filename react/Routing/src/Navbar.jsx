import React from 'react'
import { NavLink} from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div>
      <nav className='flex justify-around w-full bg-blue-300 h-fit  list-none text-white '>
        <NavLink className={(e)=>{return e.isActive?"text-red-600 font-bold":"" }} to="/home"><li>Home</li></NavLink >
        <NavLink className={(e)=>{return e.isActive?"text-red-600 font-bold":"" }} to="/login"><li>Login</li></NavLink >
        <NavLink className={(e)=>{return e.isActive?"text-red-600 font-bold":"" }} to="/contacts"><li>Contacts</li></NavLink >
        <NavLink className={(e)=>{return e.isActive?"text-red-600 font-bold":"" }} to="/user"><li>User</li></NavLink >
      </nav>
    </div>
  )
}

export default Navbar
