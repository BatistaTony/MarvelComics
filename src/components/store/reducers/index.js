import { combineReducers } from "redux";
import pesquisar from "./pesquisar";
import quadrinhos from "./quadrinhos";
import quadrinho from "./quadrinho";

const allReducers = combineReducers({
  quadrinhos,
  pesquisar,
  quadrinho
});

export default allReducers;
