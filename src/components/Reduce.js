import { useReducer } from "react";

export default function Reduce(){
    const initialState =0;
    
const reducer = (state,action)=>{
    switch (action)
    {
        case 'increament':
            return state+1;

         case  'decrement':

            return state-1 ;
            default:
                return state;   

    }

}
let handleClick=()=>{
    dispatch('increament');

}
let handleClick1 =()=>{
    dispatch('decrement');


}

  const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <div>count-{count}</div>
            <button type="button" onClick={handleClick}>increament</button>
            <button type="button" onClick={handleClick1}>decrement</button>

        </div>

    )
}