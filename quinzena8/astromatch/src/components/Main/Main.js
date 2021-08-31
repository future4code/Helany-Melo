import React from "react";
import ChooseProfile from "../ChooseProfile/ChooseProfile";
import AppBar from "../AppBar/AppBar";
import MatchList from "../MatchList/MatchList";
import styled from "styled-components";

const MainContainer = styled.div`
 border: 1px solid red;
 border-radius:3px;
 width:400px;
 height:700px;
 margin: auto;
`



function Main (){
    return (
        <MainContainer>
            <AppBar/>
            {/* <ChooseProfile/> */}
            <MatchList/>
        </MainContainer>
    )
}

export default Main;