import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { RFValue } from "react-native-responsive-fontsize";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, HeaderContent, Header, CarsTotal, CarList } from "./styles";
import { StatusBar } from "react-native";

export function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  const carData = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao DIA",
      price: 120,
    },
    thumbnail: "https://www.downloadclipart.net/large/audi-png-file.png",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/car");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Car data={item} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
