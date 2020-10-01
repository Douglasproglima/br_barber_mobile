import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

console.tron.log('Logando');

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </>
  );
}
