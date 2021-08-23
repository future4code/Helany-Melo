import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body {
    margin:0;
    font-family: 'Signika', sans-serif;

}

button {
    font-family: 'Gotham Pro';
}
`

export const BaseSite = styled.div`

    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    background-image: url("https://wallpapersfull.com/wallpapers/2019/violao-azul-wallpaper-5920.jpg");
    background-repeat: no-repeat;
    background:cover;
    background-size: 100%;
    height: 100vh;    
    width: 100vw;






`

export const Header = styled.header`
height: 90px;
display: flex;
font-size: 25px;
align-items: center;
text-align: center;
justify-content: center;
color: black;
position: sticky;
top:0;
left: 0;
background-image: linear-gradient(to left, gray, #15d659, gray);


`

export const BotaoMultiPaginas = styled.div`


height: 50px;
margin: auto;


button {
    cursor:pointer;
    border: 1px solid gray;
    border-radius: 15px;
    background-image: linear-gradient(to left, gray, #15d659, gray);
    font-size: 30px;
    margin-bottom: 10px;
   
}

`

export const Footer = styled.footer`
display: inline-block;
flex-direction: column;
text-align: center;
padding: 25px;
background-color: black;
color:white;
height:60px;


`
