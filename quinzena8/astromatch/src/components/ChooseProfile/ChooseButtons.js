import React from "react";
import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function ChooseButton (props){
 
    return (
        <ButtonContainer >
        <button onClick ={props.onClickNo}>
          <ClearSharpIcon/>
        </button>
        <button onClick ={props.onClickYes}>
          <FavoriteIcon/>
        </button>
        </ButtonContainer>
    )
}

export default ChooseButton;