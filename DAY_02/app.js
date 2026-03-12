const element1 = React.createElement("h1",{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"40px",color:"black"}},"Hello Coder Army");

const element2 = React.createElement("h2",{id:"second",className:"Rahul", style:{backgroundColor:"blue",fontSize:"40px",color:"black"}},"Maza aaya mujhe");

const div1 = React.createElement('div',{},[element1,element2]);

// ReactDom.render(element,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element1);
// root.render(element2);
root.render(div1);

