import { useState } from 'react';
import './Form.css';

function Form() {
    const [name,setName] =useState(""); 
     const [sureName,setsureName] =useState("");
     const [gmail,setGmail] =useState(" ");
     const [password,setPassword] =useState(" ");

    let handleChange =(e)=>{
        let name=e.target.value
        setName(name); 
    }
  let handleChange1 =(e)=>{

        let sureName =e.target.value;
        setsureName(sureName);
    }
    let handleChange2 =(e)=>{

        let gmail =e.target.value;
        setGmail(gmail);
    }
    let handleChange3 =(e)=>{

        let password =e.target.value;
        setPassword(password);
    }
    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log( name,sureName,gmail,password,)
        }


    return (
        <div className="form">

            <form onSubmit={handleSubmit}>
                <label>First name</label>
                <input onChange={handleChange}
                 type="text" 
                 value={name}
                />
                <br></br>
                <label>Sure name</label>
                <input onChange={handleChange1}
                 type="text" 
                 value={sureName}
                />
                <br></br>

                <label id='gmail'>gmail</label>
                <input 
                onChange={handleChange2}
                type="text"
                value={gmail}
                /><br></br>

               <label id="password">password</label>
                <input 
                onChange={handleChange3}
                type="text"
                value={password}
                /><br></br>
            
                <input id="submit" type="Submit" />
            </form>
            
        </div>
    );
}

export default Form;