import { useEffect, useState } from 'react';
import Array1 from './Array1';




export default  function Api (){

    let [arrays,setarrays] = useState([]);

     useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>setarrays(data))

    }, [] )


    return (

<div>
    {arrays.map(value => ( <Array1 email ={value.email} nam={value.name} key={value.id}></Array1>))}
    
</div>
)
    }


// }
//     let arrays =[
//         {nam:"hridoy",age:22},
//         {nam:"foysal",age:22},
//         {nam:"riad",age:22},
//         {nam:"ojit",age:22},
//         {nam:"sufiyan",age:22},
//         {nam:"mohiful",age:22},
//         {nam:"Ish",age:22},
//         {nam:"sanjana",age:25},
//         {nam:"urila",age:25},
//         {nam:"saba",age:23}
       
//     ]

 