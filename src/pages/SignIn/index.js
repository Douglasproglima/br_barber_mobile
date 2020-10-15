import React, { useRef, useState } from 'react';
import { Image, View, Button } from 'react-native';
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
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import Background from '~/components/Background/auth';
import logo from '~/assets/logo60x60.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    if (email && password) dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image style={{ width: 340, height: 180 }} source={logo} />

        <View>
          <Title>Faça seu logon</Title>
        </View>

        <Form>
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaputalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            ENTRAR
          </SubmitButton>
          <Button
            style={{ backgroundColor: '#eb3349', borderRadius: 4, height: 46 }}
            title="ENTRAR"
            onPress={handleSubmit}
          />
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Ainda não possui conta? Cadastre-se</SignLinkText>
        </SignLink>

        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </Container>
    </Background>
  );
}
