import React from "react";
import "./styles.css";


/*
  A sequencia de execução é:
  1. Setar states com setState
  2. Chamar return
  3. Chamar useEffect()
  4. Chamar o segundo useEffect()
  5. O retorno da API chamado no primeiro useEffect() retorna, então
  o setUsers é chamado, o valor de users atualizado e o return é chamado
  6. Em seguida, setLoading é chamado e return é chamado novamente
  7. Por fim, toda vez que atualizarmos o campo, o segundo useEffect() é chamado,
  pois ele tem como dependência (segundo parametro) a variavel name, e ela é alterada
  toda vez que o valor do campo é alterado
*/

const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["User 1", "User 2"]);
    }, 2000);
  });
};

//Aqui temos outro componente com seu useEffect
function Loading() {
  React.useEffect(() => {
    console.log("Loading...");

    return () => { //Essa função será executada na desmontagem do componente
      console.log("Loading OK");
    };
  });

  return <h1>Loading ...</h1>;
}

/*
  Vale lembrar que apenas o que tiver fora de useEffect() e do useState
  é chamado mais de uma vez
*/
export default function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("CodeSandbox");

  const handleChange = event => setName(event.target.value);

  //useEffect(): substitui o componentDidMount, componentDidUpdate e componentWillUnmont
  //Primeiro parametro: função que será executada como componentDidMount e componentDidUpdate
  //Na criação do componente, é executado uma vez. Depois, ao atualizar o "state" é chamado também
  //como componentDidUpdate, mas e se não quisermos? 
  //Segundo parametro: uma lista de depndência, ou seja, o useEffect só será
  //chamado ao atualizarmos um state contido no array de dependência. Se passarmos um array vazio [], ele só irá chamar
  //o useEffect() no componentDidMount (uma única vez)
  //Por último, a função retornada pela useEffect será o componentWillUnmont
  React.useEffect(() => {
    console.log("use Effect")
    api().then(response => {
      console.log("chegou api")
      setUsers(response);
      console.log("users ok")
      setLoading(false);
      console.log("loading ok")
    });
  }, []);

  React.useEffect(() => {
    console.log("use effect 2")
    if (name === "React") {
      console.log("change");
    }
  }, [name]); //Esse useEffect só será executado para componentDidUpdate do name

  return (
    <div className="App">
      {/* {loading && <Loading />} */}

      { console.log("Rendering") }

      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <div className="App">
        <div>
          <input type="text" value={name} onChange={handleChange} />
        </div>
        <h1>Hello {name}</h1>
      </div>
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props);

//     this.state = {
//       users: [],
//       loading: true
//     };
//   }

//   componentDidMount() {
//     console.log('didMount')
//     api().then(response => {
//       this.setState({
//         users: response,
//         loading: false
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Com class</h1>
//         {this.state.loading && "...loading"}

//         <ul>
//           {this.state.users.map(user => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
