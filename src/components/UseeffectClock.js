import { useEffect, useState } from "react";

function UseeffectClock() {

    const [date, setDate] =useState(new Date());

  let tick=()=>{

    setDate(new Date())

  }

  useEffect(()=>{

    console.log("hello");

   let clear= setInterval(tick,1000);

   return()=>{
    console.log("hello world");
    clearInterval(clear);

   }

  },[])
 

    return (
        <div>
           <h1>new date is {date.toLocaleTimeString()} </h1>
        </div>
    );
}

export default UseeffectClock;