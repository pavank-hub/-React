import React, { useState } from "react";
import ReactDOM from"reactdom/client";

function Counter(){
    let [count,setCount] = useState(0); 

    function incrementNo(){
        setCount(count+1);
    }
    function decrementNo(){
        setCount(count-1);
    }

    return (
        <div className="first">
            <h1>Count is: {count}</h1>

            <button onClick={incrementNo}>Increment {count}</button>

            <button onClick={decrementNo}>Decrement {count} </button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);