/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import * as firebase from 'firebase';
import LoginScreen from './src/screens/LoginScreen';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDr91jvo96cBYLaQuQ5qoQM6dqhAvJNly4",
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

