import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroud_secondary};
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;
export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;

  text-align: justify;
`;
export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroud_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
