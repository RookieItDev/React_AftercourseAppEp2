/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GoogleMap from './screens/GoogleMap';
import GoogleMapLatLonWithUseState from './screens/GoogleMapLatLonWithUseState';
import GoogleMapDirection from './screens/GoogleMapDirection';
import AsyncStorageData from './screens/AsyncStorageData';

AppRegistry.registerComponent(appName, () => AsyncStorageData);
