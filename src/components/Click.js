import { useState } from "react"
import Click1 from "./Click1"

export default function Click(){

    const [count,setCount] =useState(5)

   let handleClick =()=>{
        setCount (count+1)
        
    }
    return(
        <div>
            <h1>Number of {count}</h1>


              <button onClick={handleClick}>Click me</button>

              <Click1 increameant={count*1}></Click1>
              <Click1 increameant={count-2}></Click1>
              <Click1 increameant={count+3}></Click1>
              <Click1 increameant={count+4}></Click1>
              <Click1 increameant={count+5}></Click1>

        </div>

        
    )


}