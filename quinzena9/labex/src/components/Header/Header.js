import React from "react";
import styled from "styled-components";




const NavBar = styled.img`
    
    width:100vw;
    height: 100px;
    background:linear-gradient(black, purple);
  
`

const Logo = styled.h1`
    width:50px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top:-70px;
    margin-left: 20px;
    color:whitesmoke;

`

const Body = styled.div`
    width: 100vw;
    height: 100vh;
`




function Header (){
    return (
        <div>
            <NavBar/>
            <Logo>LabeX</Logo>
        </div>
    )
} 

export default Header;



