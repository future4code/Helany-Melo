import styled from "styled-components"



export const ContainerListaPlaylists = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 2;

h1 {
    margin-bottom: 50px;
    color: white;
}
`

export const ListaPlaylistCard = styled.div`
background-image: linear-gradient(to left, gray, #15d659, gray);
display: flex;
width: 50%;
justify-content: space-between;
align-items: center;
text-align: center;
border: 1px solid black;
padding: 12px;
margin-bottom: 20px;
flex-direction: left;



button {
    margin-left: 10px;
    border: 1px solid gray;
    border-radius:15px;
    height: 35px;
    background-color: black;
    color: white;
    width: 100px;

}



`