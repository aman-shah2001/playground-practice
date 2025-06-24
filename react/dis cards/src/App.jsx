import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
fetch

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([])

  let fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }
  // let sl = cards.map(item => {
  //   return (
  //     <div key={item.id} className="card border-1 bg-yellow-400 w-75 h-75 ">
  //       <h4 className='border-1 bg-red-400'>userid={item.userId}</h4>
  //       <h4 className='border-1 bg-blue-400'>id={item.id}</h4>
  //       <h4 className='bg-green-400'>{item.title}</h4>
  //       <h4>{item.body}</h4>
  //     </div>
  //   )
  // })

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <Navbar />
      <div className=" flex flex-wrap justify-around gap-5">
        {cards.map(item => {
          return (
            <div key={item.id} className="card border-1 bg-yellow-400 w-75 h-75 ">
              <h4 className='border-1 bg-red-400'>userid={item.userId}</h4>
              <h4 className='border-1 bg-blue-400'>id={item.id}</h4>
              <h4 className='bg-green-400'>{item.title}</h4>
              <h4>{item.body}</h4>
            </div>
          )
        })}
        {/* {sl.slice(0,10)}  */}
      </div>
    </>
  )
}

export default App
