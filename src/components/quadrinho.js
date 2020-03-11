import React from "react";
import "./styles/quadrinhos.scss";
import { seeQ } from "./store/actions.js/quadrinhos";
import { useDispatch } from "react-redux";

export default function Quadrinhos(props) {
  const dispatch = useDispatch();

  const verQuadrinho = q => {
    dispatch(seeQ(q));
  };

  return (
    <li className="quadrinhos">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>{props.autores}</h3>
      <button onClick={() => verQuadrinho(props.q)}>Ver</button>
    </li>
  );
}
