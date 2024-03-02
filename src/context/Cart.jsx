import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const  useCart = () =>{
    const cartcotext = useContext(CartContext);
    return cartcotext;
}



export const CardProvider = (props)=>{
    const [items,setItems] = useState([])
    return(
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}