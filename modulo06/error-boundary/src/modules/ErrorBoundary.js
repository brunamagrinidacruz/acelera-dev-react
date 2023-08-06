import React from "react";

/*
    É uma forma de capturar erros em React em componentes de classe (não funciona com React Hooks) durante a renderização
    Usa dois métodos:
getDerivedStateFromError(): faz uma manipulação de forma que se escolha qual componente usar se tiver erro ou não
componentDidCatch(): é usado para gerar um log de erro

*/

import { logErrorToMyService } from "../utils";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
