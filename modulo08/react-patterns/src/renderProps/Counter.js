import React, { Component } from "react";
import CounterWrapper from "./CounterWrapper";
import CounterUI from "../components/Counter";

class Counter extends Component {
  render() {
    return (
      <CounterWrapper
        render={({ increment, decrement, count }) => (
          <CounterUI
            increment={increment}
            decrement={decrement}
            count={count}
          />
        )}
      />
    );
  }
}

export default Counter;
