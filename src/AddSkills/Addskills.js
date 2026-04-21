import { useState } from 'react';
import "./AddSkills.css";
const arr=["Pega","Java","Jsx","Php","AJAX","Jquery","CSS","Tailwind"];


export default function AddSkills(){
    const [selected, setSelected] = useState(arr);
    let x="";
    return(
        <div className="form-container">
     <input type="text" className="form-input"  onChange={(e)=>{x=e.target.value;}}  placeholder="Enter item..." />

       <div className="cards-container">
        {selected.map((e,i,arr)=>(
            <div key={i}  className="card" onClick={()=>{console.log(e);
            }}>

        <h1>{e}</h1>
        </div>
        ))}

     
       <button className="form-button" onClick={()=>{
        const updarr=[...selected];
        updarr.push(x);
        console.log(updarr);
        setSelected(updarr);

       }}>Add</button>

      
</div>
</div>
    );}
    