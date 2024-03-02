import {useCart} from '../context/Cart';

export default function Cart() {
    const cartcotext = useCart();

    const total = cartcotext.items.reduce((a,b)=> a+b.price ,0);
    
  return (
    <div>
      <h1>Cart</h1>
        <ul>
            {cartcotext.items && cartcotext.items.map((item)=>(
                <li>{`${item.name} ${item.price}`}</li>
            ))}
        </ul>
        <h5>total - {total}</h5>
    </div>
  )
}
