/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import previewView from './previewView';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('previewView', () => previewView);
