import React from 'react';


class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h2>Etapa 3 - Informações sobre quem não se formou no ensino superior nem está cursando</h2>

                <p>1. Por que você não terminou um curso de graduação?</p>
                <input></input>
                

                <p>Você fez algum curso complementar? </p>
                 <select >
                    <option value ="Curso técnico">Curso técnico</option>
                    <option value ="Curso de inglês">Curso de inglês</option>
                    <option value ="Não fiz curso complementar">Não fiz curso complementar</option>
                    

                </select>

            </div>
        )
    }
}
export default Etapa3;