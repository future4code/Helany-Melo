import React from  'react';
import styled from "styled-components";


const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


class Etapa1 extends React.Component {
    render (){
        return(
            <FormContainer>
                
                <h2>Etapa 1 - Dados Gerais</h2>
                <p>1. Qual o seu nome?</p>
                <input></input>

                <p>2. Qual a sua idade?</p>
                <input></input>

                <p>3. Qual o seu E-mail?</p>

                <label> Qual a sua escolaridade?</label>
                
                
                
                <select >
                    <option value ="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                    <option value ="Ensino Médio Completo">Ensino Médio Completo</option>
                    <option value ="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value ="Ensino Superior Completo">Ensino Superior Completo</option>

                </select>
            </FormContainer>
        );
    }
}
export default Etapa1;
   
  



  