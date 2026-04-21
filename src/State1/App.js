import { useState } from "react";

export function SimpleCounter(){
    const[Counter,SetCounter]=useState(0);
    return(
        <div>
            <div>The Count is {Counter}</div>
            <button onClick={()=>SetCounter(Counter+1)}>Please Click Me</button>
            
        </div>
    );

}

/*export function AddNames(){
    const[NameList,UpdateList]=useState(["France","Germany","Italy"]);
    return(
        <div>

        </div>
    )
}*/