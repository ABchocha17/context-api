// import { useContext } from "react";
// import Counter from "./components/Counter";
// import {CounterContext} from "./context/Counter";


// function App() {
// const counterState = useContext(CounterContext);

//   return (
//     <div className="app">
//       <h1>Count is {counterState.count}</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// export default App;



import Item from "./components/Item";
import Cart from "./components/Cart";


function App() {


  return (
    <div className="app">
      <Item name="MacBook Pro" price={10000} />
      <Item name="pendrive" price={10} />
      <Item name="mobile" price={1000} />
      <Cart />
    </div>
  );
}

export default App;