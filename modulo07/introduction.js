/* 
    Permite utilizar state dentro de componentes de função, fim do class. 
    Entretanto, são opcionais e retrocompatíveis.
    Permitem uma função a se ligar aos recursos do state e clico
    de vida do React.

    Na primeira parte de React, vimos componentes com funções. Entrentato, não
    tínhamos acesso a state ou ciclo de vida do React a partir dentro dessas funções.
    Se quisessemos acessar essas propriedades, era necessário utilizar React class.
    Então surge o React Hooks: uma forma de utilizar ciclo de vida e state
    dentro de funções, dando uma alternativa a class.

    A vantagem é usar de forma totalmente funcional.

    React possui alguns hooks internos:
    - useState(): substitui o this.state das classes. Ele retorna 2 valores, o state atual
    e uma função para modificá-lo (parecida com o this.setState) e recebe como argumento o state inicial
    - useEffect(): substitui o componentDidMount, componentDidUpdate e componentWillUnmont

    E é possível criar hooks (custom hooks)
*/