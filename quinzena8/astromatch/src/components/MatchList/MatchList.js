import React from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";

const ListContainer = styled.div`
    padding: 8px;
    
`


function MatchList (){
    return(
        <ListContainer>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
        </ListContainer>
    )
}

export default MatchList;