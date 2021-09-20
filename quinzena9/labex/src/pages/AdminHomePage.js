import React, { useState } from "react";
import axios from "axios";
import { goToCreateTripPage, goToHomePage } from "../route/Path";
import { useHistory } from "react-router-dom";
import {
  Button,
  BackButtonContent,
  ButtonContent,
  ButtonExit,
  TripContainer,
  TripContent,
  Trip,
  
  TripText,
} from "./AdminHomePage.styles";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useResquestDate";


export default function AdminHomePage() {
  const history = useHistory();
  useProtectedPage();
  const listTrips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/trips",
    []
  );

  const goToDetailPage = (id) => {
    history.push(`/admin/viagens/${id}`);
  };

  const deleteTrip = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/trips/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <TripContainer>
        {listTrips.map((trip) => {
          return (
            <TripContent onClick={() => goToDetailPage(trip.id)} key={trip.id}>
              <Trip>
                <TripText>{trip.name}</TripText>
              </Trip>
            
                <img
                  src="x"
                  alt=""
                  onClick={() => {
                    deleteTrip(trip.id);
                  }}
                />
            
            </TripContent>
          );
        })}
      </TripContainer>
      <ButtonContent>
        <Button onClick={() => goToCreateTripPage(history)}>
          CRIAR VIAGEM
        </Button>
        <ButtonExit onClick={logout}> SAIR </ButtonExit>
      </ButtonContent>
    </div>
  );
}
