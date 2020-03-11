import React from 'react'
import './styles/quadrinhos.scss'

export default function Quadrinhos(props){
    return (
        <li className="quadrinhos">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h3>{props.autores}</h3>
        </li>
    )
}