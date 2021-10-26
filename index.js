/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import App from './App';
// import App from './src_Navigation/App';
// import App from './src_LMS/App';
// import App from './src/App';
import App from './src_simulasiDarkMode/App'
// import App from './src_asynstorage/App'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
