import { useEffect, useState } from "react";

function UseeffectInput() {
    const [count,setCount] =useState(1);
    const [text,setText] =useState()

    useEffect(()=>{
     
        document.title = `Clicked ${count} times`


    },[count])

    let handleClick = () =>{

        setCount((prev)=>prev+1);

    }
    
    return (
        <div>
            <p>
            <button onClick={handleClick}>Button+</button>
            </p>

            <p> <input type="text" value={text} onChange ={(e)=>setText(e.target.value)}/></p>
            
         
            
        </div>
    );
}

export default UseeffectInput;