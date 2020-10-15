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
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  background: #2f2c35;
  color: #ffffff;
  margin-bottom: 10px;
  opacity: 0.6px;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #727cf5;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #727cf5;
`;
