import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    let [Password,setPassword] = useState("ABDKLDSLMF");
    let [length,setLength] = useState(10);
    // after clicking / changing number or charcter 
    // it need to update in password as in UI
    let [numChange,setNumChange] = useState(false);
    let [charChange,setCharChange] = useState(false);


    const generatePassword =  useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numChange)
            str+="0123456789";
        if(charChange)
            str+="~!@#$%^&*()_{}:=-+`,./<>?";

        let pass = "";
        for(let i=0;i<length;i++){ 
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
         
    },[length,numChange,charChange]);

    useEffect(()=>{
        generatePassword();
    },[generatePassword]);

    return (
        <>
        <h1>{Password}</h1>
        <div>
            <input type="range" min={5} max={50} defaultValue={length} onChange={((e)=> setLength(e.target.value))}></input>
            <label>Length is: ({length})</label>

            <input type="checkbox" defaultChecked={numChange} onChange={()=>setNumChange(!numChange)} ></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charChange} onChange={()=>setCharChange(!charChange)} ></input>
            <label>Character</label>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);

