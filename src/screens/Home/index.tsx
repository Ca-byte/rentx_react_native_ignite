import React from "react";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, HeaderContent, Header, CarsTotal } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <CarsTotal>Total de 12 carros</CarsTotal>
        </HeaderContent>
      </Header>
    </Container>
  );
}
