import React, { useEffect, useState } from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";
import axios from "axios"

const ListContainer = styled.div`
    padding: 8px;
    
`


function MatchList () {
    const [matches, setMatches]=useState([])
    
    
      useEffect(() =>{
          axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helany/matches").then(response =>{
            console.log(response.data.matches)
            setMatches(response.data.matches)
          })
          
      }, []);
    return(
        <ListContainer>
            {matches.map((profile)=>{
                return<MatchListItem profile={profile}/>
            })}
        </ListContainer>
    )
}   

export default MatchList;