import React from "react";

import App from "./App";

import { render, fireEvent } from "@testing-library/react";

/*
        A React Testing Library é uma biblioteca de testes construída em cida da 
    DOM Testing Library para trabalhar com os componentes React.
        Ela realiza a busca no DOM da mesma forma que o usuário faria, o que 
    faz o app se tornar mais acessível.
        Já fez instalada com o create-react-app e renderiza o componente
    igual a renderização do DOM (o componente e tudo que o envolve).
        Utiliza de funções (queries) para fazer as chamadas no DOM e
    retorna como erro o elemento renderizado.
        São exemplos de queries:
    - getBy()*: são buscas que retornam o primeiro elemento encontrado
    para uma busca, lança erro caso não encontre
    - getAllBy*(): retorna um array dos elementos encontrados ou um
    erro se não encontrar nenhum
    - queryBy*(): retorna o primeiro elemento encontrado ou null caso nenhum, é mais utilizado para saber 
    se o elemento existe ou não  pois retorna null se não existe
    - queryAllBy(): retorna um array dos elementos encontrados ou em um array vazio, é mais utilizado para saber 
    se o elemento existe ou não pois retorna null se não existe
    - findBy*(): retorna uma promise que resolve quando o elemento encontrado ou rejeita 
    caso não encontre depois de 1000ms
    - findAllBy(): retorna uma promise que resolve para um array elementos ou rejeita 
    com nenhum elemento caso não encontre depois de 1000ms
        A finalização dos comandos mais comuns são:
    - byLabelText(): é procurado um label e conseguimos pegar o input correspondente a ele, mas
    para isso acontecer, o nosso label deve ter uma propriedade htmlFor=<id_do_input> e seu
    valor é o id do input a qual corresponde. Exemplo:
        <label htmlFor="form-name" className="form-label">
            Nome
        </label>
        <input
            type="text"
            id="form-name"
            className="form-control"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
    - byText(): identifica pelo texto       
    - byRole():
    - byTestId(): identifica por uma tag de teste. Para conseguir, a tag deve ter um atributo
    data-testid=<id_que_jest_usara>. Exemplo:
            <div data-testid="show-name">Nome: {this.state.name}</div>
*/

/*
    Mock é algo que imita o dado real da aplicação (arquivo json, variáveis), mock de funções imitiam o 
  comportamento de funções reais (fetch, eventListener)
    Para renderizar um componente, vamos usar render() e as queries para manipular o DOM
*/

describe("App", () => {
  it("should set name correctly", async () => {
    //Render é uma função do testing-library utilizada para renderizar o componente
    /*
      É o mesmo que fazer
      const view = render(<App/>)
      view.getByLabelText() ou view.getByTextId()
    */
    const { getByLabelText, getByTestId } = render(<App />);

    const event = { target: { value: "Ricky Morty" } };

    //Pegando o input por conta da propriedade htmlFor
    const inputName = await getByLabelText("Nome");

    //A função fireEvent lança um determinado evento
    //Para um input passando um valor
    fireEvent.change(inputName, event);

    //O Jest está procurando pela tag que tem o atributo data-testid="show-name"
    const name = await getByTestId("show-name");

    //Espera que o innerHTML de name seja Ricky Morty
    expect(name.innerHTML).toBe("Nome: Ricky Morty");
  });

  it("should set status to Dead", async () => {
    const { getByLabelText, getByTestId } = render(<App />);

    const inputStatus = await getByLabelText("Status");
    fireEvent.change(inputStatus, { target: { value: "Dead" } });

    const status = await getByTestId("show-status");

    expect(status.innerHTML).toBe("Status: Dead");
  });

  it("should set gender to Female", async () => {
    const { getByLabelText, getByTestId } = render(<App />);

    const inputGender = await getByLabelText("Gênero");
    fireEvent.change(inputGender, { target: { value: "Female" } });

    const gender = await getByTestId("show-gender");

    expect(gender.innerHTML).toBe("Gênero: Female");
  });

  it("should set image correctly", async () => {
    //https://github.com/testing-library/react-testing-library/issues/93
    const { getByLabelText, getByTestId } = render(<App />);
    const file = new File(["dummy content"], "chucknorris.png", {
      type: "image/png"
    });
    const event = {
      target: {
        files: [file]
      }
    };

    const inputImage = await getByLabelText("Imagem");
    fireEvent.change(inputImage, event);

    const image = await getByTestId("show-image");

    expect(image.childNodes[1].src).toBeTruthy();
  });
});
