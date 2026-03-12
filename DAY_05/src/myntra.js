import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import arr from "./utils/dummy";
import {greet,meet} from "./utils/dummy";

function App(){

    let [A, setA] = useState(arr);

    function sortArray(){
        A.sort((a,b)=> a.price-b.price);
        setA([...A]);
    }

    function pricefilter(){
        const B = A.filter((value)=>value.price>499);
        setA(B);
    }
    return (
        <>
    <Header/>  
    <button onClick={sortArray}>Sort by price</button>
    <button onClick={pricefilter}>PriceAbove500</button>
    <div 
   className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
            A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)
        }
    </div>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);