import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class SignUpForm extends Component {

	render() {
		return (
			<KeyboardAvoidingView 
				behavior="padding" 
				style={styles.container}>
				<Text
					style={styles.title}>
					Sign Up
				</Text>
				<View
					style={styles.infoContainer}>
					<View
						style={styles.bigNameContainer}>
						<View
							style={styles.smallNameContainer}>
								<TextInput 
									placeholder="First name"
									placeholderTextColor="rgba(255,255,255,0.7)"
									returnKeyType="next"
									autoCorrect={false}
									style={styles.input}
								/>
						</View>
						<View
							style={styles.smallNameContainer}>
								<TextInput 
									placeholder="Last name"
									placeholderTextColor="rgba(255,255,255,0.7)"
									returnKeyType="next"
									autoCorrect={false}
									style={styles.input}
								/>
						</View>
					</View>
					<TextInput
						placeholder="Email"
						placeholderTextColor="rgba(255,255,255,0.7)"
						returnKeyType="next"
						keyboardType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						style={styles.input}
					/>
					<TextInput 
						placeholder="Password"
						placeholderTextColor="rgba(255,255,255,0.7)"
						returnKeyType="go"
						secureTextEntry
						style={styles.input}
						ref={(input) => this.passwordInput = input}
					/>
					<TouchableOpacity 
						style={styles.buttonContainer}>
						<Text 
							style={styles.buttonText}>
							REGISTER 
						</Text>
					</TouchableOpacity>
					<Text 
						style={styles.signupText}>
							Already a member?
					</Text>
					<TouchableOpacity
						onPress={this.signUpPress}>
						<Text
							style={styles.signupTextPress}>
							Back to login page.
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	title: {
		marginTop: 50,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFF'	
	},
	infoContainer: {	
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	bigNameContainer: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	smallNameContainer: {
		flex: 1,
		alignItems: 'stretch',
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
	input: {
		height: 35,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginLeft: 7,
		marginRight: 7
	},
	signupText: {
		textAlign: 'center',
		color: '#FFF',
		paddingVertical: 10
	},
	signupTextPress: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '900'
	}
})