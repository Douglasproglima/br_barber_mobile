/* import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.1.7' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
 */

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.7' }) // IOS assim já funciona
    // .configure({ host: '10.200.3.191' }) // android
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
