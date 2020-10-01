import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo60x60.png';
// import logo from '~/assets/logo60x60-black.png';
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
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image style={{ width: 340, height: 180 }} source={logo} />
        <Form>
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
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

          <SubmitButton onPress={handleSubmit}>ENTRAR</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Ainda não possui conta? Cadastre-se</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
