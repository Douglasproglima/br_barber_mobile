import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 100px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #ff8039;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 8px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
