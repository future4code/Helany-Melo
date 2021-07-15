// import React from 'react';
// import CardCurso from './CardCuso';
import React from 'react';
import './CardCurso.css'

function CardCurso(props) {
    return (
        <div className="cardcurso-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardCurso;