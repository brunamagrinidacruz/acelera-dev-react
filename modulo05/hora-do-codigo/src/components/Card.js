import React from 'react'
import "./Card.css"

//Apenas usando "export", temos que importar com chaves
export function Card(props) {
    return (
        <div className="card">{props.children}</div>
    )
}

export function CardImage(props) {
    return(
        <img className="card-image" src={props.src} alt={props.alt} />
    )
}

export function CardBody(props) {
    return(
        <div className="card-body">{props.children}</div>
    )
}

export function CardTitle(props) {
    return(
        <p className="card-title">{props.title}</p>
    )
}

export function CardText(props) {
    return(
        <p className="card-text">{props.text}</p>
    )
}
