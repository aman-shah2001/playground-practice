import React from 'react'
import { useState } from 'react'

function Counter() {
     const [value,setvalue]=useState(0)
    return (
        <div>
            <h2>hello world {value}</h2>
            <button onClick={() => { setvalue(value + 1) }}>click me</button>
        </div>
    )
}

export default Counter
