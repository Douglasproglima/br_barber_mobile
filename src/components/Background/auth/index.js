import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: [
    '#424249',
    '#ff8039',
    '#ff8039b3',
    '#ff8039b3',
    '#ff8039',
    '#424249',
  ],
  start: { x: 0.7, y: 0.01 },
  end: { x: 0.5, y: 1.1 },
})`
  flex: 1;
  opacity: 75;
`;
