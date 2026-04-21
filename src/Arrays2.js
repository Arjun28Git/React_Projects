import { useState } from 'react';
import './index.css';
const arr=["Pega","Java","Jsx","Php","AJAX","Jquery","CSS","Tailwind"];


export default function Showcards(){
    const [selected, setSelected] = useState(arr);
    return(
        <div className="cards-container">
        {arr.map((e,i,arr)=>(
            <div key={i}  className="card" onClick={()=>{console.log(e);
                console.log(selected);
                const newarr=[...selected];
                console.log(newarr);
                
            
                setSelected(selected);
            
            }}>

        <h1>{e}</h1>
        </div>
        ))}
</div>
    );}
    