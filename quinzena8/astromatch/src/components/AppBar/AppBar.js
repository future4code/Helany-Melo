import React from "react";
import styled from "styled-components";


const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`

function AppBar (props){
    return (
        <AppBarContainer>
            <button onClick={props.goToChooseProfile}>Escolher</button>
            <p>ASTROMATCH</p>
            <button onClick={props.goToMatchList}>Lista</button>
        </AppBarContainer>
    )
}

export default AppBar;