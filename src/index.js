import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import { store, persistor } from './store';

console.tron.log('Logando');

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar translucent backgroundColor="transparent" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
