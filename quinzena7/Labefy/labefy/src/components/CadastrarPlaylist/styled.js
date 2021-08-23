import styled from "styled-components"



export const ContainerCriaPlaylist = styled.div`

flex-direction: column;
margin: auto;
flex-grow: 1;
width: 30%;

input {
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:white;
    font-size:35px;
    margin: auto;
    width: 500px;
    :focus {
      outline: none;
    }
}

button {
    display:flex;
    margin: auto;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, gray, #15d659, gray);
}

h1{
    color:whitesmoke;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}
`
