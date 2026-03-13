import { useEffect, useState } from "react";

function Body(){

    const [Profile,setProfile] = useState([]);
    const [noOfProfile,setNoOfProfile] = useState("");

    async function generateProfile(count){
        let ran = Math.floor(1+Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(()=>{
        generateProfile(10);
    },[]);
    
    return(
        <div>
            <input type="text" className="input" placeholder="search here" value={noOfProfile} onChange={(e)=> setNoOfProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(noOfProfile))}>Search Profiles</button>
            <div className="profiles">
                {
                    Profile.map((value)=>{
                        return (
                        <div key={value.id}   className="cards">  
                        <img src={value.avatar_url}/>
                        <h2>{value.login}</h2> 
                        <a href={value.html_url} target="_blank">Profile</a>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Body;