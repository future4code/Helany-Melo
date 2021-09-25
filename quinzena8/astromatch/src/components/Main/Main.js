import React,{useState} from "react";
import ChooseProfile from "../ChooseProfile/ChooseProfile";
import AppBar from "../AppBar/AppBar";
import MatchList from "../MatchList/MatchList";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  `


function Main (){
    const [selectedPage, setSelectedPage]=useState("choose-profile")
    const renderSelectedPage =() =>{
        switch(selectedPage){
            case'choose-profile':
                return<ChooseProfile/>
            case 'match-list':
                return<MatchList/>
            default:
                return<ChooseProfile/>
        }
    }

    const goToChooseProfile =() =>{
        setSelectedPage("choose-profile")
    }

    const goToMatchList =() =>{
        setSelectedPage("match-list")
    }
    return (
        <MainContainer>
            <AppBar goToChooseProfile={goToChooseProfile} goToMatchList={goToMatchList} />
            {renderSelectedPage()}
        </MainContainer>
    )
}

export default Main;