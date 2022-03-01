import React from 'react'

const ClassComponent = ({nome, estaNaLista}) => {
    return (
        <li>{nome} {estaNaLista ? "está" : "não está"} convidado para a festa</li>
        )
 }
 
export default ClassComponent