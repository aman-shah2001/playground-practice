import { useState } from 'react'
import './App.css'
import Design from './component/design'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Design/>
    </>
  )
}

export default App
