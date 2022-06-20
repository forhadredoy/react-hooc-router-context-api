import { useState } from 'react';
  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  let [count, setCount] = useState(0);  

    let handleClick =()=>{
        setCount (count+1)
        
    }
    
  
  return (  
    <div>  
      <p>You clicked {count+1} times</p>  
      <p>You clicked {count-1} times</p>  
      <p>You clicked {count+3} times</p>  
      <p>You clicked {count} times</p>  
      <button onClick={handleClick}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CountApp;  