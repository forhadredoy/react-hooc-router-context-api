import { useEffect, useState } from "react";

function Useeffect() {

    const [count,setCount] =useState(1);

    useEffect(()=>{
        document.title = `Clicked ${count} times`


    })

    let handleClick = () =>{

        setCount((prev)=>prev+1);

    }
    return (
        <div>

            <button onClick={handleClick}>Button+</button>
           

        </div>
    );
}

export default Useeffect;