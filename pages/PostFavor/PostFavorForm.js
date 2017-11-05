import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import '../../App';

export default class PostFavorForm extends Component {
	constructor(props){
		super(props);
		this.state = {title: '', desc: '', location: '', datetime: '', payment: ''};
	}

	CheckTextInputIsEmptyOrNot = () => {
		const { title } = this.state;
		const { desc } = this.state;
		const { loc } = this.state;
		const { dt } = this.state;
		const { pay } = this.state;

		if(title === '' || desc === '' || location === '' || datetime === '' || payment === '') {
			Alert.alert("You have not filled in all required fields.");
		}
	}

	render() {
		return (
			<KeyboardAvoidingView 
				behavior="padding" 
				style={styles.container}>

				<Text
					style={styles.title}>
					Post a Favor
				</Text>

				<View
					style={styles.infoContainer}>
					<TextInput
						ref = {'title'}
						placeholder="Favor Title"
						placeholderTextColor="rgba(255,255,255,0.7)"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.input}
						onChangeText={title => this.setState({title})}
					/>
				</View>

				<View
					style={styles.infoContainer}>
					<TextInput
						ref = {'desc'} 
						placeholder="Favor Description"
						placeholderTextColor="rgba(255,255,255,0.7)"
						underlineColorAndroid='transparent'
						style={styles.multilineinput}
						autoCorrect={false}
						multiline = {true}
						onChangeText={desc => this.setState({desc})}
					/>
				</View>

				<View
					style={styles.infoContainer}>	
					<TextInput
						ref = {'loc'}
						placeholder="Location"
						placeholderTextColor="rgba(255,255,255,0.7)"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.input}
						onChangeText={loc => this.setState({loc})}
					/>
					<TextInput
						ref = {'dt'}
						placeholder="Date and Time of Favor"
						placeholderTextColor="rgba(255,255,255,0.7)"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.input}
						onChangeText={dt => this.setState({dt})}
					/>
					<TextInput
						ref = {'pay'}
						placeholder="Payment"
						keyboardType='decimal-pad'
						placeholderTextColor="rgba(255,255,255,0.7)"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.input}
						onChangeText={pay => this.setState({pay})}
					/>
					<TouchableOpacity 
						style={styles.buttonContainer}>
						<Text
							onPress={this.CheckTextInputIsEmptyOrNot} 
							style={styles.buttonText}>
							POST FAVOR
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
		marginTop: 40,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFF'	
	},
	infoContainer: {	
		justifyContent: 'center',
		alignItems: 'stretch'
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
	multilineinput: {
		height: 200,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginLeft: 7,
		marginRight: 7,
		fontSize: 17
	}
})