import React, { useEffect } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { Container } from "./styles";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

export function Splash() {
  const splashAnimation = useSharedValue(0);

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

  useEffect(() => {
    splashAnimation.value = withTiming(60, { duration: 1000 });
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
