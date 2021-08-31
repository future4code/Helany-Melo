import React from "react";
import styled from "styled-components";

const  ButtonContainer = styled.div`
    display:flex;
    justify-content:space-around;

`

function ChooseButton (){
    return (
        <ButtonContainer >
        <button>Sim</button>
        <button>Não</button>
        </ButtonContainer>
    )
}

export default ChooseButton;