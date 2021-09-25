import React from "react";
import { goToFormAppPage, goToHomePage } from "../route/Path";
import { useHistory } from "react-router-dom";
import {
  Button,
  BackButtonContent,
  ButtonContent,
  TripContent,
  TripContainer,
  TripTitle,
} from "./ListTripPage.styles";
import useRequestData from "../hooks/useResquestDate";
export default function ListTripPage() {
  const history = useHistory();
  const listTrips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/trips",
    []
  );

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <TripContainer>
        {listTrips.map((trip) => {
          return (
            <TripContent>
              <TripTitle>{trip.name}</TripTitle>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays}</p>
              <p>{trip.date}</p>
            </TripContent>
          );
        })}
      </TripContainer>

      <ButtonContent>
        <Button onClick={() => goToFormAppPage(history)}> VIAJE AGORA </Button>
      </ButtonContent>
    </div>
  );
}
