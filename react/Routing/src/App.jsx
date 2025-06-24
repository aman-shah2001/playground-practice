import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './components/Home'
import Login from './components/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './components/Contacts'
import User from './components/user'


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/contacts",
      element: <><Navbar /><Contacts /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
