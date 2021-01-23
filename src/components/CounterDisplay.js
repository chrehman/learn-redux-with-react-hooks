import React from 'react'
import {useSelector} from 'react-redux'

function CounterDisplay() {
    const count=useSelector((state)=>{
        return state.counter
    })
    return (
        <div>
            <h3>Component2</h3>
            Counter Display  {count}
        </div>
    )
}

export default CounterDisplay
