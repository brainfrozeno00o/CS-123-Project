import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUpForm from './pages/Login/SignUpForm';
import Login from './pages/Login/Login';
import PostFavorForm from './pages/PostFavor/PostFavorForm';
 
const Screens = StackNavigator({
  Login: {screen: Login, navigationOptions:{header:null},},
  SignUpForm: {screen: SignUpForm, navigationOptions:{header:null},},
  PostFavorForm: {screen: PostFavorForm, navigationOptions:{header:null},},
});

console.disableYellowBox = true; //F O R C E R E M O V E W A R N I N G S

export default class Gofer extends Component {
  render() {
    return <Screens/>;
  }
}