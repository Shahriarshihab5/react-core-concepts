import { useState } from "react"

export default function Team (){

    const [team,setTeam]=useState(11);
    const handleAdd = ()=>{
const newteam = team +1;
setTeam(newteam);
    }
    const Handleremove =()=>{

        const remove = team-1;
        setTeam(remove);

    }

const teamStyle = {
border:"2px solid purple",
margin:'15px',
padding:'15px',
borderRadius:'15px'
}

return(
    <div style={teamStyle}>
        <h3>player :{team}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={Handleremove} >Remove</button>
    </div>
)

}