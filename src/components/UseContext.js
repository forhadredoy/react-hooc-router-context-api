import { useState } from "react";

export default function Component1() {
  let [user, setUser] = useState("forhad hossain redoy");

  let enter =()=>{
    let hei ='alom kha'
    let i=50;
    if (hei =="alom khan"){
      setUser (user+i);
    
    }
    else{
      setUser (user+hei)

    }
  
}

  return (
    <>
      <h1>Hello {user}</h1>
      <button onMouseEnter={enter}>this is button</button>
      <Component5 user={user} />
    </>
  );
}


function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>hello {user}</h2>
    </>
  );
}

