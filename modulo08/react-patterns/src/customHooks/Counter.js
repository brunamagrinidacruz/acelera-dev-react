import React from "react";
import CounterUI from "../components/Counter";

import useCount from "./useCount";

/*
* Aqui temos um Hook 
*/
function Counter() {
  const { increment, decrement, count } = useCount();

  return (
    <div className="App">
      <CounterUI increment={increment} decrement={decrement} count={count} />
    </div>
  );
}

export default Counter;
