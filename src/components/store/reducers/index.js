import { combineReducers } from "redux";
import pesquisar from "./pesquisar";
import quadrinho from "./quadrinho";

const allReducers = combineReducers({
  pesquisar,
  quadrinho
});

export default allReducers;
