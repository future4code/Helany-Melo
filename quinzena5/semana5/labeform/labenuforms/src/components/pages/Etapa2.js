import React from 'react';
import styled from "styled-components";


const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

class Etapa2 extends React.Component{
    render (){
        return(
            <FormContainer>
                <h2>Etapa 2 - Informações do Ensino Superior</h2>
                <p>5. Qual o seu curso</p>
                <input></input>

                <p>6. Qual a unidade de ensino?</p>
                <input></input>
                </FormContainer>
        );
    }
}

export default Etapa2;
    
       