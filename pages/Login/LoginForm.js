import React, { Component } from 'react';
import { Navigation, AppRegistry, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import '../../App';

export default class LoginForm extends Component {
	render() {
		return (
				<View style={styles.container}>
					<StatusBar
						barStyle="light-content"
					/>
					<TextInput 
						placeholder="Username or Email"
						placeholderTextColor="rgba(255,255,255,0.7)"
						returnKeyType="next"
						onSubmitEditing={() => this.passwordInput.focus()}
						keyboardType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.input}
					/>
					<TextInput 
						placeholder="Password"
						placeholderTextColor="rgba(255,255,255,0.7)"
						returnKeyType="go"
						secureTextEntry
						style={styles.input}
						underlineColorAndroid='transparent'
						ref={(input) => this.passwordInput = input}
					/>
					<TouchableOpacity 
						style={styles.buttonContainer}>
						<Text 
							style={styles.buttonText}>
							LOGIN 
						</Text>
					</TouchableOpacity>
					<Text 
						style={styles.signupText}>
							Not a member yet?
					</Text>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('SignUpForm')}>
						<Text
							style={styles.signupTextPress}>
							Register here.
						</Text>
					</TouchableOpacity>
				</View>
		);
	}
}



const styles = StyleSheet.create ({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '700'
	},
	signupText: {
		textAlign: 'center',
		color: '#FFF',
		paddingVertical: 12
	},
	signupTextPress: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '900'
	}
});