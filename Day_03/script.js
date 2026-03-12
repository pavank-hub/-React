import React from "react";
import ReactDOM from "react-dom/client";

const element1 = React.createElement("h1",{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"40px",color:"black"}},"Hello Coder Army");

const element2 = React.createElement("h2",{id:"second",className:"Rahul", style:{backgroundColor:"blue",fontSize:"40px",color:"black"}},"Maza aaya mujhe");

// JSM : js ke expression
const names = "Pavan";
const obj = {
    age:23,
    salary:60

}
const obj2 = {
    backgroundColor: "blue",
    color: "pink",
    fontSize:"20px"
}

const newElement = (
    <>
    <h1 id="first" className="second">Hello Coder Army {names}</h1> 
    <h2 style={obj2}>Maja aa gya {obj.age}</h2>
    </>
)
// babel:             React                  Render
// JSX => React.createElement() => react element(JSObject) => Html Element

const div1 = React.createElement('div',{},[element1,element2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(newElement);

// JSX : JavaScript XML: HMTL code direct js ke andr likh skte ho


// React Component
// Function Based Component

function greet(){
    return <h1>Mera sab achha hai</h1>;
}
function meet(){
    return <h1>Kaise ho sab</h1>;
}
const newElement2 = greet();
const newElement3 = meet();
const allElement = (
    <>
    {greet()}
    {meet()}
    {/* without curly bracket m nhi likh skte becox u are using function based componet(js component hai) */}
    </>
)
root.render(allElement);