/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, projectId, storageBucket, messagingSenderId, appId} from 'react-native-dotenv';

import * as firebase from 'firebase';
import LoginScreen from './src/screens/LoginScreen';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "sharefair-d252f.firebaseapp.com",
  databaseURL: "https://sharefair-d252f.firebaseio.com",
  projectId: "sharefair-d252f",
  storageBucket: "sharefair-d252f.appspot.com",
  messagingSenderId: "551524519235",
  appId: "1:551524519235:web:d958fe962f40a072"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
