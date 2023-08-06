import React from "react";

import { Button } from "../components/Button";
import Prizes from "./Prizes";

// import { NOBEL_PRIZE_URL } from "../constants";
import data from "../data/prizes.json";
import wrongData from "../data/wrongPrizes.json";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prizes: []
    };
  }

  getPrizes = () => {
    // fetch(NOBEL_PRIZE_URL)
    //   .then(resp => resp.json())
    //   .then(prizes => this.setState({ prizes }));
    this.setState({ prizes: data.prizes });
  };

  getWrongPrizes = () => {
    this.setState({ prizes: wrongData.prizes });
  };

  render() {
    return (
      <div className="App">
        <h1>Prêmios Nobel</h1>

        <Button name="Carregar Prêmios Nobel" onClick={this.getPrizes} />
        <Button
          name="Carregar Prêmios Nobel com erro"
          onClick={this.getWrongPrizes}
        />

        <Prizes prizes={this.state.prizes} />
      </div>
    );
  }
}
