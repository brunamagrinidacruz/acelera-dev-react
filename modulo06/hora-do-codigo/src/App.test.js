import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import data from './data/data.json';

describe("App", () => {
  describe("Status", () => {
    it("shows all characters if clicked on all button", async () => {
      const { getByTestId, findAllByTestId } = render( <App/> );
      const button = getByTestId("all-status");
      
      fireEvent.click(button.childNodes[0]); //Pegamos a div all-status e selecionamos o primeiro filho

      const character = await findAllByTestId("character");
      expect(character.length).toBe(20);
    });

    it("sets status to alive", async () => {
      const { getByText, findAllByTestId } = render(<App />);

      await findAllByTestId("character");
      
      const button = await getByText("Vivo");
      fireEvent.click(button);
      
      const character = await findAllByTestId("character");

      expect(character.length).toBe(8);
    });

  })
})