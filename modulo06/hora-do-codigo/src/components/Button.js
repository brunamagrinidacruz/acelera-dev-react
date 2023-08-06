import React from 'react'
import './Button.css'

//O export é para exportar a função
//Recebemos como parametro as propriedades e podemos utilizar dentro da função
export default function Button(props) {
    return (
        <button className="button" onClick={props.handleClick}>{props.titulo}</button>
    )
    
}

