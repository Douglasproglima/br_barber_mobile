import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const reducersPersistidos = persistReducer(
    {
      key: 'br_barber_mobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return reducersPersistidos;
};
