/**
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { Provider } from "react-redux";
import { storeFactory } from "./app_state/index";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
class BookReading extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.tsx</Text>
        <Text>{instructions}</Text>
      </View>
    );
  }
}

// Create Redux store
const store = storeFactory();

// Container to connect the store to the main app
const App = () => (
    <Provider store={store}>
        <BookReading />
    </Provider>
);
export default App;