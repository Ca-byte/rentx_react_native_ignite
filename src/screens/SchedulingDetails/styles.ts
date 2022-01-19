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
export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;
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

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_details};

  text-transform: uppercase;
`;

export const RentalPriceDatails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroud_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
