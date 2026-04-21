export default function BodyofPage(props)
{
    return(
        <div class="container">
            <div><h1>{props.name}</h1>
            
            <img src={props.logo} alt={props.logo}>
            </img>
            
            </div>
            
    </div>
       
);
}