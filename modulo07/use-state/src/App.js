import React from "react";
import "./styles.css";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: ""
//     };
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </div>
//         <h1>Hello {this.state.name}</h1>
//       </div>
//     );
//   }
// }

//Uma função
export default function App() {
  //Manipulação

  // useState(): substitui o this.state das classes. Ele retorna 2 valores, o state atual
  // e uma função para modificá-lo (parecida com o this.setState) e recebe como argumento o state inicial
  const [name, setName] = React.useState("CodeSandbox");

  const handleChange = event => setName(event.target.value);

  //Retorna o componente
  return (
    <div className="App">
      <div>
        <input type="text" value={name} onChange={handleChange} />
      </div>
      <h1>Hello {name}</h1>
    </div>
  );
}
