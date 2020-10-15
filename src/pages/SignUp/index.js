import React, { useRef, useState } from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  BackToSignIn,
  BackToSignInText,
} from './styles';
import logo from '~/assets/logo60x60.png';
import Background from '~/components/Background/auth';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    if (name && email && password)
      dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image style={{ width: 340, height: 180 }} source={logo} />

        <View>
          <Title>Crie sua conta</Title>
        </View>

        <Form>
          <FormInput
            icon="person"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            CADASTRAR
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possui uma conta? Faça Login</SignLinkText>
        </SignLink>

        <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#ff9000" />
          <BackToSignInText>Voltar para o logon</BackToSignInText>
        </BackToSignIn>
      </Container>
    </Background>
  );
}
