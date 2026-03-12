import React, { useEffect, useState } from "react";

function Colorful(props){
    const [color,setColor] = useState("black");
    console.log("first");
    console.log(props.name);
    // neeche wala faltu m do baar chl ja rha hai
    // useEffect(Callback Function,dependency)
    useEffect(()=>{
        console.log("useEffect Executed");
        document.body.style.backgroundColor = color;
    },[color]);
    // dependency m color liye hai , agr color change hua tab chlega
    
    console.log("second");
    return (
        <>
        <h1>Background Color Changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button style={{backgroundColor:"blue"}}
            onClick={()=> setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
            <button style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>Pink</button>
        </div>
        </>
    )
}

export default React.memo (Colorful);