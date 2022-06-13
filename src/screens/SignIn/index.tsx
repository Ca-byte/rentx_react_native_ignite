import React from "react";
import { StatusBar } from "react-native";
import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";
import { useTheme } from "styled-components";
import { PasswordInput } from "../../components/PasswordInput";

export function SignIn() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos {"\n"} quase lá.</Title>
        <SubTitle>
          Faça seu login para começar {"\n"}
          uma experiência incrível
        </SubTitle>
      </Header>
      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <PasswordInput iconName="lock" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Cria um Conta gratuita"
          color={theme.colors.backgroud_secondary}
          light
          onPress={() => {}}
          enabled={true}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
