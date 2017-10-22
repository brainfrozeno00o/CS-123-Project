import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUpForm from './pages/Login/SignUpForm';
import Login from './pages/Login/Login';
 
export default class Gofer extends Component {
  render() {
    return (
        <SignUpForm/>
    );
  }
}