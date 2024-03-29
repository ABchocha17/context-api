import React, { createContext, useState } from 'react';

export const CounterContext = createContext(null)

export function CounterProvider(props) {
    const [count,setCount] = useState(0);
  return (
    <CounterContext.Provider value={{count,setCount}}>
        {props.children}
    </CounterContext.Provider>
  )
}
