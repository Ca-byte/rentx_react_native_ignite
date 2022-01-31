import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;

  background-color: ${({ theme }) => theme.colors.backgroud_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secundary_500};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secundary_500};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secundary_500};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secundary_500};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
