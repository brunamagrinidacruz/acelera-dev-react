import React, { Component } from "react";
import withCount from "./withCount";
import CounterUI from "../components/Counter";

class Counter extends Component {
  render() {
    const { increment, decrement, count } = this.props;
    return (
      <CounterUI increment={increment} decrement={decrement} count={count} />
    );
  }
}

export default withCount(Counter);
