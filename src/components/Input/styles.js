import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px 15px;
  height: 50px;
  background: #333;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#C8BCB5',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
`;
