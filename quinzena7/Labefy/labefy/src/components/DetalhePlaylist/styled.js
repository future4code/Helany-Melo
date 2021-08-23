import styled from "styled-components"

export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    color:white;
}

h2 {
    margin-top: 40px;
    color:white;
}
`

export const CardMusica = styled.div`

display: flex;
border: 1px solid black;
align-items: center;
width: 800px;
margin-bottom: 20px;
padding-left:10px;
background-color: white;
justify-content: space-evenly;
background-image: linear-gradient(to left, gray, #15d659, gray);

`
export const CardAdicionar = styled.div`
display: flex;
flex-direction: column;
text-align: center;
color: white;



input {
    background: transparent;
    border:none;
    border-bottom: 1px solid white;
    margin-bottom: 15px;
    width:100%;
    height: 20px;
    color:white;
    font-size: 15px;
}

button {
    cursor: pointer;
    border: gray;
    background-image: linear-gradient(to left, gray, #15d659, gray);
    width:100%;
    height: 35px;
    border-radius: 15px;
}

`

