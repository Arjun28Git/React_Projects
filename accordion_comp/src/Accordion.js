import { useState } from "react";

export default function ShowCharacters(){
const boys = [
  { character: "BillyButcher", details: "Destroy all supes especially Homelander" },
  { character: "Homelander", details: "Fragile ego paranoia Absolute power, adoration" },
  { character: "A-Train", details: "Fame, survival in The Seven" },
  { character: "SoilderBoy", details: "Arrogance, unstable morality Legacy, dominance" }
];    

const [activeCard,setActiveCard]=useState(null);

return(
    <div className="accrodian">
      <h1>The Boys</h1>
      {boys.map((boy, index) => (
        <div key={index} className={`card${activeCard === index ? "active" : ""}`} onClick={()=> ShowDetails(index)}>
          <h2>{boy.character}</h2>
          {activeCard === index && <p className="details">{boy.details}</p>}
        </div>
      ))}
    </div>
);

function ShowDetails(index){
   setActiveCard(activeCard === index ? null : index);
   console.log("Even happened");
   return activeCard;


}



}
