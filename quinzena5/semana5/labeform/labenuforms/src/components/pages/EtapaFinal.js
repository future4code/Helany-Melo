import React from 'react';
import styled from "styled-components";


const FormFinal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:250px auto;

`

class EtapaFinal extends React.Component{
    render(){
        return(
            <FormFinal>
                <p><strong>Agradecemos o tempo dedicado em responder a nossa pesquisa :)</strong></p>
                </FormFinal>
        );
    }
}

export default EtapaFinal;