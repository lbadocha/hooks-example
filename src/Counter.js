import React, { useState } from 'react';

const Counter = () => {

    const [counterValue, setCounterValue] = useState(7);


    const changeCounterValue = () => {
        setCounterValue(counterValue + 1)
    }


    return (
        <div className="counter">
            <p>Licznik: {counterValue}</p>
            <button onClick={changeCounterValue}>Add 1</button>
        </div>
    )
}


export default Counter;