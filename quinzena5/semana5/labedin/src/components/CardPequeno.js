import { prependToMemberExpression } from '@babel/types';
import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className="infoCardPequeno">
            <img src={props.imagem} />

            <div>
                <p>{props.email}</p>
                <p>{props.endereco}</p>
            </div>

        </div>
    )

}
export default CardPequeno;






{/* function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande; */}