import { createStore } from "redux";

import reducer from "./reducer";

/**
 * A função passada para a store é a reducer
 */
const store = createStore(reducer);

export default store;
