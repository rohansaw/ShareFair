/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button} from 'react-native';
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from 'react-native-dotenv';
import * as firebase from 'firebase';

import LoginScreen from './src/screens/LoginScreen';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
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
  constructor(props){
    super(props);
    this.state = ({
        email : '',
        password : ''
    })
}

loginUser = (email,password) => {
    try{
        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
            console.log(user);
        })
    }catch(error){
        console.log(error.toString());
    }
}

render() {
    return (
    <View style={styles.container} behavior="padding">
        <TextInput 
            style={styles.input}
            placeholder='Email' 
            onChangeText= {(email)=> this.setState({email})}
        />

        <TextInput 
            style={styles.input}
            placeholder='Password' 
            secureTextEntry={true} 
            onChangeText= {(password)=> this.setState({password})}
        />      

        <Button 
            gradient title='Login!'
            onPress = {()=> this.loginUser(this.state.email, this.state.password)}>
        </Button>

    </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  contentContainer: {
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  headerContainer : {
    width: 100 + "%",
    height: 90,
    backgroundColor: '#F5FCFF',
  },
  hasErrors: {
    backgroundColor: '#EAEB5E',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

