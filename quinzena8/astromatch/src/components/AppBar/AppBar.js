import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid orange;
    align-items: center;
    padding: 0 8px;

`

function AppBar (){
    return (
        <AppBarContainer>
            <button>Escolher</button>
            <p>ASTROMATCH</p>
            <button>Lista</button>

        </AppBarContainer>
    )
}

export default AppBar;