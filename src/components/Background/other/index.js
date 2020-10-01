import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#312e39', '#424249', '#312e39', '#424249', '#312e39'],
  start: { x: 0.1, y: 0.15 },
  end: { x: 0.5, y: 1.0 },
})`
  flex: 1;
  opacity: 75;
`;
