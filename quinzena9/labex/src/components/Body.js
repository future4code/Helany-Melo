import React from "react";
import styled from "styled-components";

 const Background = styled.img`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    padding: 0;
 `

function Body(){
    return(
        <div>
            <Background src="https://www.correio24horas.com.br//fileadmin/_processed_/6/f/csm_shutterstock_540015799_4d05aa994c.jpg"/>
        </div>
    )
}

export default Body;
