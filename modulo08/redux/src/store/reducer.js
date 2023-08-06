const INITIAL_STATE = {
  todo: "OK",
  todos: [],
  isEditing: -1
};

/**
 * Toda vez que for chamado useSelector, essa funçaõ será chamada 
 * Ao fazer apenas 
 * useSelector(state => state) o retorno será o valor de "default"
 * Ou seja, o valor atual da store
 * Para retornar uma ação especifica, o usuário deve solicitá-la atraves do seugndo parametro
 * useSelector(state => state, { type: "GET_TODOS "})
 * Este segundo parametro é uma ação. Geralmente, essa ação é configurada, não passada na mão
 * Como ela funciona? A ação é uma função que retorna o objeto que deve ser passado para o reducer
 * E esse objeto deve ter o type e pode ter um payload que contem informações extras
 */

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: ["todo 1", "todo 2"]
      };

    case "SET_TODO":
      return {
        ...state,
        todo: action.payload
      };

    case "SET_TODOS":
      return {
        ...state,
        todos: [...state.todos, state.todo]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    case "SET_EDITING":
      return {
        ...state,
        isEditing: action.payload
      };

    case "SET_TODOS_EDITING":
      return {
        ...state,
        todos: state.todos.map((t, i) => {
          if (i === state.isEditing) {
            return state.todo;
          }
          return t;
        })
      };

    default:
      return state;
  }
}

export default reducer;
