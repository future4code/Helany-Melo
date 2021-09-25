import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
`;



export const LogoImg = styled.img`
  width: 150px;
  margin-left: 30px;
  @media (max-width: 760px) {
    width: 100px;
  } ;
`;

export const AdminButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  margin-top: 50px;
  @media (max-width: 760px) {
    margin-top: 90px;
  } ;
`;

export const AdminButton = styled.button`
  justify-content:center;
  width:150px;
  margin:20px;
  
  border-radius: 10px;
  border: none;
  background-color: #338899;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  
`;

export const TripButtonContent = styled.div`
  display: flex;
  justify-content:center;
  
  
`;

export const TripButton = styled.button`
  padding: 20px;

  border-radius: 10px;
  border: none;
  background-color: #338899;
  color: white;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 300px;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(#999999);
  }
`;
