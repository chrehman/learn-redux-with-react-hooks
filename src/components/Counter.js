import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

function Counter() {
    // let [count, setCount] = useState(0)
    let [value, setValue] = useState(0)

    const count=useSelector((state)=>{
        return state.counter
    })
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Component1</h2>
            <h3>Counter {count}</h3>
            <button onClick={() => {
                // setCount(count += 1)
                dispatch( {type:"INCREMENT"} );
                // dispatch(increment());
            }}>Increment</button>
            <button onClick={() => {
                // setCount(count -= 1)
                dispatch( {type:"DECREMENT"} );
            }}>Decrement</button>
            <input type="text" onChange={(e)=>{
                setValue(Number(e.target.value))
            }}/>
            <button onClick={()=>{
                // setCount(count+=value)
                dispatch( {type:"INCREMENT_BY_VALUE" ,payload:Number(value)} );
            }}>Increment By Value</button>
            <button onClick={()=>{
                // setCount(count-=value)
                dispatch( {type:"DECREMENT_BY_VALUE" ,payload:Number(value)} );
            }}>Decrement By Value</button>
            

        </div>
    )
}

export default Counter
