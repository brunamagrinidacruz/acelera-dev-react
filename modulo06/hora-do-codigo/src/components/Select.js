import React from 'react'
import './Select.css'

export default function Select(props) {
    const itens = props.itens;
    return( 
        <select className="select">
            {
                itens.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })
            }
        </select>
    )
}