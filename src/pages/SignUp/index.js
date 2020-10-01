import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo60x60.png';
// import logo from '~/assets/logo60x60-black.png';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image style={{ width: 340, height: 180 }} source={logo} />
        <Form>
          <FormInput
            icon="person"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu nome"
          />
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton>CADASTRAR</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possui uma conta? Faça Login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
