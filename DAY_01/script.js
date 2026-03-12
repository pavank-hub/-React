// create h1 using js

// const { createElement } = require("react");

// const element = document.createElement('h1');
// element.textContent = "Hello Coder Army";
// element.style.backgroundColor = "blue";
// element.style.color="white";

// const element2 = document.createElement('h2');
// element2.textContent = "Kaise ho aap sab log";
// element2.style.backgroundColor = "orange";
// element2.style.color="white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2)


// if i want to create one more element then again need to write same code

// lets make function for this

// styles = {fontSize:"30px", backgroundColor:"blue", color:"white"}


// React : Object
// ReactDOM : Object
  
///////////////////////////////
const React = {
    createElement: function(tag, styles, children){
        const element = document.createElement(tag);
        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else
        element.innerText = children;

        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}


const ReactDom = {
    render : function(element,root){
        root.append(element);
    }
}

const header1 = React.createElement("h1",{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello Coder Army");
const header2 = React.createElement("h1",{fontSize:"25px", backgroundColor:"orange", color:"black"},"Kaise ho aap");

// unordered list 
// HTML
// CSS
// JS
const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const ul = React.createElement('ul',{fontSize:"30px", backgroundColor:"blue", color:"white"},[li1,li2,li3]);


ReactDom.render(header1,document.getElementById('root'))
ReactDom.render(header2,document.getElementById('root'))
ReactDom.render(ul,document.getElementById('root'))