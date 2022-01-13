import React from "react";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";

import { Container, HeaderContent, Header, CarsTotal, CarList } from "./styles";
import { StatusBar } from "react-native";

export function Home() {
  const carData = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao DIA",
      price: 120,
    },
    thumbnail: "https://www.downloadclipart.net/large/audi-png-file.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <CarsTotal>Total de 12 carros</CarsTotal>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
