import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      status: "",
      gender: "",
      image: ""
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeStatus = event => {
    this.setState({ status: event.target.value });
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value });
  };

  handleChangeImage = event => {
    const image = URL.createObjectURL(event.target.files[0]);
    this.setState({ image });
  };

  render() {
    return (
      <div className="App">
        <form>
          <div className="form-group">
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
          </div>

          <div className="form-group">
            <label htmlFor="form-status" className="form-label">
              Status
            </label>
            <select
              id="form-status"
              className="form-control"
              value={this.state.status}
              onChange={this.handleChangeStatus}
            >
              <option value="" />
              <option value="Alive">Vivo</option>
              <option value="Dead">Morto</option>
              <option value="unknown">desconhecido</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="form-gender" className="form-label">
              Gênero
            </label>
            <select
              id="form-gender"
              className="form-control"
              value={this.state.gender}
              onChange={this.handleChangeGender}
            >
              <option value="" />
              <option value="Male">Macho</option>
              <option value="Female">Fêmea</option>
              <option value="unknown">desconhecido</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="form-image" className="form-label">
              Imagem
            </label>
            <input
              id="form-image"
              type="file"
              className="form-control"
              onChange={this.handleChangeImage}
            />
          </div>
        </form>

        <div>
          <h1>Novo personagem</h1>
          <div data-testid="show-name">Nome: {this.state.name}</div>
          <div data-testid="show-status">Status: {this.state.status}</div>
          <div data-testid="show-gender">Gênero: {this.state.gender}</div>
          <div data-testid="show-image">
            Imagem:
            {this.state.image && (
              <img
                className="image-preview"
                src={this.state.image}
                alt="Text"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
