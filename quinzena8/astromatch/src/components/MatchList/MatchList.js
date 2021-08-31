import React from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";

const ListContainer = styled.div`
    padding: 8px;
    
`


function MatchList (){
    return(
        <div>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>

            </div>
    )
}

export default MatchList;