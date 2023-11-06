import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import pokemonsReducer from "./pokemons/reducer";

export const store = createStore(pokemonsReducer, composeWithDevTools(applyMiddleware(thunk)))