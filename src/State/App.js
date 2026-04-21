import { useState } from "react";

export default function ShowTargetRun(props){
    const[Target,setCount]=useState(20);

    return(
        <div>
      <p>You have to run {Target} kilometers! 🏃</p>
      <p>You today ran {props.run} kilometers! 🏃</p>
      <button onClick={() => setCount(Target - props.run)}>
        UpdatedTarget
      </button>
      <p>Remaining {Target} kilometers! to finish the race🏃</p>
    </div>
    );

}


