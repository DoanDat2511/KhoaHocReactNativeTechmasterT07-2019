/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import MainComponent from './MainComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainComponent);
