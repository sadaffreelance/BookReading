/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { setTheme } from "react-native-material-kit";
import App from './App';
import {name as appName} from './app.json';
import theme from "./theme";

setTheme({
  primaryColor: theme.color.brandPrimary,
  accentColor: theme.color.brandSecondary,
});

AppRegistry.registerComponent(appName, () => App);
