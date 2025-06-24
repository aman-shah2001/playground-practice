import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("aman") 
  const [form, setForm] = useState({
    email:"",
    phone:""
})
  
  const handling = () => {
    alert("i am clicked")
  }
  const mouse = () => {
    document.querySelector(".red").style.backgroundColor = " blue"
  }
  const changevalue=(e)=>{
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  // const changevalue2=(e)=>{
  //   setForm(e.target.value)
  // }

  return (
    <>
      <div className="button">
        <button onClick={handling}>click me</button>
      </div>
      <div className="red bg-red-400 h-10" onMouseOver={mouse}>
        i am red
      </div>
      <div className="border-2">

      <input type="text" name='email' value={form.email} onChange={changevalue}/>
      <input type="text" name='phone' value={form.phone} onChange={changevalue}/>
      </div>

    </>
  )
}

export default App
