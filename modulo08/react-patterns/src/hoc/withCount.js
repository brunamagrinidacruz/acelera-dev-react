import React from "react";
import PropTypes from "prop-types";

/*
*   Esse é um exemplo de High Order Componentes (HOC).
*   O High Order Components é uma função que recebe um componente e devolve um componente
*   Seu objetivo é modularizar quanto um componente tem as mesmas propriedades de outro
*   Por exemplo, suponhando duas telas que devem listar o estoque, podemos criar um High Order Components
*  que recebe um componente e adiciona a ele uma propriedade lista_de_estoque com os dados
*  e em seguida, ele retorna o componente com a lista de estoque adicionada
*  No caso do nosso segundo componente, bastaria chamar ele da mesma forma. Ficaria algo assim
*       class Stock extends Component {...}
*       export default withListStock(Stock);
*   https://blog.rocketseat.com.br/higher-order-components-hocs-no-react-e-react-native/
*/
function withCount(Component) {
  class CounterWrapper extends React.Component {
    state = {
      count: 0
    };

    increment = () => {
      const { count } = this.state;
      return this.setState({ count: count + 1 });
    };

    decrement = () => {
      const { count } = this.state;
      return this.setState({ count: count - 1 });
    };

    render() {
      const { count } = this.state;

      return (
        <div className="App">
          <Component
            increment={this.increment}
            decrement={this.decrement}
            count={count}
          />
        </div>
      );
    }
  }

  CounterWrapper.propTypes = {
    render: PropTypes.func.isRequired
  };

  return CounterWrapper;
}

export default withCount;
