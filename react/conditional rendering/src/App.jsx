import { useState } from 'react'
import './App.css'



function App() {
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "i am todo"
    },
    {
      title: "hey 2",
      desc: "i am todo 2"
    },
    {
      title: "hey 3",
      desc: "i am todo 3"
    },

  ])
  // const Todo = (props) => {
  //   return (
  //     <>
  //       <div className="m-4 border-2 border-purple-400">
  //         <div className="todo">{props.tittle}</div>
  //         <div className="todo">{props.description}</div>
  //       </div>
  //     </>

  //   )
  // }

  return (
    <>

      {showbtn && <button>click me when visible</button>} {/*shows button if showbtn state is true or else nothing is shown*/}
      {/* {showbtn?<button>click me when visible</button>:"Aalu"} */}
      <button onClick={() => setshowbtn(!showbtn)}>count</button>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {todos.map(item => {
        return (
          <div key={item.title} className="m-4 border-2 border-purple-400" >
            <div className="todo">{item.title}</div>
            <div className="todo">{item.desc}</div>
          </div>
          // <Todo key={item.title} tittle={item.title} description={item.desc} />
        )
      })}
      {/* <Todo title="hey"/> */}
    </>
  )
}

export default App