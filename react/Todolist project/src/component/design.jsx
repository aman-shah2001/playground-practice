import React from 'react'
import Todolist from './Todolist'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



function Design() {
    const [text1, setText1] = useState('')
    const [texts, setTexts] = useState([])
    const [showfinished, setShowfinished] = useState(false)
    const change = (e) => {
        setText1(e.target.value)
        console.log(text1)
    }

    const handleadd = () => {
        setTexts([...texts, { id: uuidv4(), text1, isCompleted: false }])
        setText1('')
    }
    const handlecheckbox = (e) => {
        let id = e.target.name
        let index = texts.findIndex(item => item.id === id);
        let newtexts = [...texts]
        newtexts[index].isCompleted = !newtexts[index].isCompleted
        setTexts(newtexts)
    }

    const handledelete = (e) => {
        const updatedTexts = texts.filter(item => item.id !== e);
        setTexts(updatedTexts);
    };

    const handleedit = (e) => {
        let t = texts.filter(item => item.id === e)
        setText1(t[0].text1)
        console.log(t[0])
        const updatedTexts = texts.filter(item => item.id !== e);
        setTexts(updatedTexts);
    }

    const togglefinished=()=>{
        setShowfinished(!showfinished)
    }

    return (
        <div className='mx-auto w-fit border-1 m-5 bg-blue-100 h-auto'>
            <div className="m-5">
                <h1 className='font-bold mb-7 text-center'>iTask-Manage your Todos at one place</h1>
                <h2 className='font-bold'> Add a Todo</h2>
                <div className="flex gap-5 mt-2.5 mb-5 ">
                    <input id='id1' className='border-2 rounded-lg bg-amber-50 w-100' type="text" value={text1} onChange={change} />
                    <button className=' bg-blue-400 w-15 rounded-lg hover:bg-blue-300' disabled={text1.length <= 0} onClick={handleadd}>save</button>
                </div>
                <div className="check flex gap-5">
                    <input type="checkbox" name="aman" checked={showfinished} id="1" onChange={togglefinished} />
                    <div>Show Finished</div>
                </div>
                <div className="line border-1 border-black-400  w-full mb-5 mt-5 "></div>
                <h2>Your Todos</h2>
                {texts.map(item => {
                    return (!showfinished || item.isCompleted) && (
                        <div className="check1 flex gap-10 mb-2.5 mt-5 " key={item.id}>
                            <input type="checkbox" checked={item.isCompleted} name={item.id} id="" onChange={handlecheckbox} />
                            <p className={item.isCompleted ? "line-through" : ""}>{item.text1}</p>
                            <div className="button">
                                <button className='bg-red-500 w-10 pl-2.5 py-0.5 rounded-lg  hover:bg-red-600 mr-2' onClick={() => handledelete(item.id)}><img src="delete.png" alt="" width={20} /></button>
                                <button className='bg-blue-400 w-10  pl-2.5 py-0.5 rounded-lg  hover:bg-blue-300' onClick={() => handleedit(item.id)}><img src="edit.png" alt="" width={20} /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Design
