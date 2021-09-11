import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  background-color: #999999;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 80px;
  
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 10px;
  font-size: 14px;
  font-family: sans-serif;
`;
const FooterRedes = styled.div`
  display: flex;
  margin: 0 10px;
  gap: 20px;
  text-decoration: none;
`;
const FooterEmail = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  
`;

const LinksFooter = styled.a`
  text-decoration: none;
  color: white;
  margin:0 10px;
`;

function Footer() {
  return (
    <FooterDiv>
      <FooterRedes>
          <h3>Siga-nos nas redes sociais:</h3>
        <LinksFooter href="https://www.facebook.com/">Facebook</LinksFooter>

        <LinksFooter href="https://www.instagram.com/">Instagram</LinksFooter>
      </FooterRedes>

      <FooterEmail>viagensespaciais@labex.com.br</FooterEmail>
    </FooterDiv>
  );
}



export default Footer;