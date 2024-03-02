import {useCart} from '../context/Cart';

export default function Item(props) {
  const cartcotext = useCart();
  console.log(cartcotext)
  return (
    <div className='item_card'>
        <h4>{props.name}</h4>
        <p>price: ${props.price}</p>
        <button onClick={()=> cartcotext.setItems([...cartcotext.items,{name:props.name,price: props.price}])}>Add to cart</button>
    </div>
  )
}
