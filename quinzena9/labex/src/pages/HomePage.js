import React, { useEffect } from "react";
import {
  Container,
  
  LogoImg,
  AdminButtonContent,
  AdminButton,
  TripButton,
  TripButtonContent,
} from "./HomePage.styles";
import { useHistory } from "react-router-dom";
import { goToListTripPage } from "../route/Path";


export default function HomePage() {
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const ChangePagebyToken = () => {
    if (token) {
      history.push("/admin");
    } else if (!token) {
      history.push("/login");
    }
  };
  return (
    <Container>
      
        <div>
          <LogoImg src="" />
        </div>
        <AdminButtonContent>
          <AdminButton onClick={() => ChangePagebyToken()}>
            ADMIN LOGIN
          </AdminButton>
        </AdminButtonContent>
     
      <TripButtonContent>
        <TripButton onClick={() => goToListTripPage(history)}>
          VER VIAGENS
        </TripButton>
      </TripButtonContent>
    </Container>
  );
}
