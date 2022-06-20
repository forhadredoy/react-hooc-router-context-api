import { useEffect, useRef, useState } from "react";

export default function Focus() {
    let [Name,setName] =(useState(''))
  const prevName= useRef();

 useEffect(()=>{

  prevName.current = Name;


 },[Name])
  
  let handleChange=(e)=>{

    setName(e.target.value);

  }

  return (
    <>
      <input type="text" value={Name} onChange={handleChange}/>
      <h1>My name is{Name} and  {prevName.current}</h1>
    </>
  );
}

