import React, { useRef } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo60x60.png';
import Background from '~/components/Background/auth';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>CADASTRAR</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possui uma conta? Faça Login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
