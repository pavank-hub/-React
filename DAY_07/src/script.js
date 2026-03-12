import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./components/Colorful";

// background colour changer

function Main(){

    const [count,setCount] = useState(0);

    return (
        <>
        <div className="counter">
        <h1>Count is: {count}</h1>
        <button className="pro" onClick={()=> setCount(count+1)}>Increment</button>
        </div>
        <Colorful name={count}/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);