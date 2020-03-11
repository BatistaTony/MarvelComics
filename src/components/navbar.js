import React from "react";
import "./styles/navbar.scss";
import { useDispatch } from "react-redux";

export default function Navbar(props) {
  const dispatch = useDispatch();

  const handleChange = async e => {
    e.preventDefault();

    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <div className="Navbar">
      <h1>MarveL Comics</h1>
      <div className="search_div">
        <input
          type="text"
          placeholder="digite a personagem aqui"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
