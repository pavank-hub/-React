import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";


function GithubProfile(){
    // Header
    // Body: 10 card show karege
    return (
        <>
        <Header></Header>
        <Body></Body>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);

// Try catch functionality add karo
// UseCallback function add karne ki koshish
// Search button: Name ke basis: User profile exists, display kara dena