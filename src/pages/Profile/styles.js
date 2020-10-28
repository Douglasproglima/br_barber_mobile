import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ff8039;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Separator = styled.View`
  height: 1px;
  background: #727cf5;
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIdicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button).attrs({
  color: '#ffffff',
})`
  margin-top: 10px;
  background: #ff8039;
  height: 40px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #ff8039;
  color: #ffffff;
  height: 40px;
`;
