import axios from 'axios';
/*
  IP dos dispositivos:
  GenyMogion: http://10.0.3.2:3333
  Emulador Android: http://10.0.2.2:3333
  Emulador IOS: http://10.200.3.191:3333
  VIA USB: http://localhost:3333 or http://IP_DA_SUA_REDE:3333
*/
const IP_ADDRESS = 'http://10.0.2.2:3333';
const IP_USB = 'http://192.168.1.7:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
