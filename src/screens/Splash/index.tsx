import React, { useEffect } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import { Container } from "./styles";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";
import { useNavigation } from "@react-navigation/native";

export function Splash() {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation<any>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 20, 40, 60],
        [1, 0.7, 0.3, 0]
      ),

      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, 60],
            [0, -60],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 20, 40, 60],
        [0, 0.3, 0.7, 1]
      ),
    };
  });

  function startApp() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(60, { duration: 1000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);
  return (
    <Container>
      <Animated.View style={brandStyle}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
