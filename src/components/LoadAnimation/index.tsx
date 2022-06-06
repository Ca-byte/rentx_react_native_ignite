import React from "react";
import LottieView from "lottie-react-native";
import LoadingAnimation from "../../assets/load_animated.json";

import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={LoadingAnimation}
        style={{ height: 150 }}
        resizeMode="contain"
        autoPlay
        loop
      ></LottieView>
    </Container>
  );
}
