import React from 'react'
import { useContext } from "react";
import {CounterContext} from "../context/Counter";


export default function Counter() {
const {setCount,count} = useContext(CounterContext);

  return (
    <div>
        <button onClick={()=> setCount( count + 1)} >click to +1</button>
        <button onClick={()=> setCount( count - 1)}>click to -1</button>
    </div>
  )
}
