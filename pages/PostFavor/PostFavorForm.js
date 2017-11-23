import React, { Component } from 'react';
import { Alert, Navigation, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, ScrollView } from 'react-native';
import '../../App';

export default class PostFavorForm extends Component {
	constructor(props){
		super(props);
		this.state = {title: '', desc: '', loc: '', dt: '', pay: ''};
	}

	CheckTextInputIsEmptyOrNot = () => {
		const { title } = this.state;
		const { desc } = this.state;
		const { loc } = this.state;
		const { dt } = this.state;
		const { pay } = this.state;

		if(title === '' || desc === '' || loc === '' || dt === '' || pay === '') {
			Alert.alert("You have not filled in all required fields.");
		}

		else {
			fetch('http://192.168.0.42/insertFavor.php',{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: title,
					description: desc,
					location: loc,
					datetime: dt,
					payment: pay
			  })
				}).then((response) => response.json())
				.then((responseJson) => {Alert.alert(responseJson);})
				.then(this.refs['title'].setNativeProps({text: ''}))
				.then(this.refs['desc'].setNativeProps({text: ''}))
				.then(this.refs['loc'].setNativeProps({text: ''}))
				.then(this.refs['dt'].setNativeProps({text: ''}))
				.then(this.refs['pay'].setNativeProps({text: ''}))
				
			.catch((error) =>{console.log(error)}) 
			.done();

			Alert.alert("Your favor has been posted!");
			this.props.navigation.navigate('HomePage');
		}
	}

	render() {
		return (
			<ScrollView
				style={styles.contentContainer}	
				keyboardDismissMode="on-drag">

					<KeyboardAvoidingView
					behavior="position" 
					style={styles.container}>

					<Text
						style={styles.title}>
						Post a Favor
					</Text>

					<Text
						style={styles.fieldLabel}>
						Favor Title
					</Text>

					<View
						style={styles.infoContainer}>
						<TextInput
							ref = {'title'}
							//placeholder="Favor Title"
							//placeholderTextColor="rgba(255,255,255,0.7)"
							autoCapitalize="none"
							autoCorrect={false}
							underlineColorAndroid='transparent'
							style={styles.input}
							onChangeText={title => this.setState({title})}
						/>
					</View>

					<Text
						style={styles.fieldLabel}>
						Favor Description
					</Text>

					<View
						style={styles.infoContainer}>
						<TextInput
							ref = {'desc'} 
							//placeholder="Favor Description"
							//placeholderTextColor="rgba(255,255,255,0.7)"
							underlineColorAndroid='transparent'
							style={styles.multilineinput}
							autoCorrect={false}
							multiline = {true}
							onChangeText={desc => this.setState({desc})}
						/>
					</View>

					<View
						style={styles.infoContainer}>	

						<Text
						style={styles.fieldLabel}>
						Location
						</Text>

						<TextInput
							ref = {'loc'}
							//placeholder="Location"
							//placeholderTextColor="rgba(255,255,255,0.7)"
							autoCapitalize="none"
							autoCorrect={false}
							underlineColorAndroid='transparent'
							style={styles.input}
							onChangeText={loc => this.setState({loc})}
						/>

						<Text
							style={styles.fieldLabel}>
							Date and Time Due
						</Text>

						<TextInput
							ref = {'dt'}
							//placeholder="Date and Time of Favor"
							//placeholderTextColor="rgba(255,255,255,0.7)"
							autoCapitalize="none"
							autoCorrect={false}
							underlineColorAndroid='transparent'
							style={styles.input}
							onChangeText={dt => this.setState({dt})}
						/>

						<Text
							style={styles.fieldLabel}>
							Payment
						</Text>

						<TextInput
							ref = {'pay'}
							//placeholder="Payment"
							//placeholderTextColor="rgba(255,255,255,0.7)"
							keyboardType='decimal-pad'
							autoCapitalize="none"
							autoCorrect={false}
							underlineColorAndroid='transparent'
							style={styles.input}
							onChangeText={pay => this.setState({pay})}
						/>
						<TouchableOpacity
							onPress={this.CheckTextInputIsEmptyOrNot}	
							style={styles.buttonContainer}>
							<Text
								onPress={this.CheckTextInputIsEmptyOrNot}	
								style={styles.buttonText}>
								POST FAVOR
							</Text>
						</TouchableOpacity>
					</View>
				
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create ({
	contentContainer: { 
		paddingVertical: 20,
		backgroundColor: '#3498db'
	},
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	fieldLabel: {
		fontSize: 17,
		color: '#FFF',
		fontWeight: 'bold',
		marginLeft: 6
	},
	title: {
		marginTop: 40,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		color: '#000',
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
		paddingHorizontal: 7,
		paddingVertical: 7,
		marginLeft: 7,
		marginRight: 7
	},
	multilineinput: {
		height: 200,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 7,
		paddingVertical: 7,
		marginLeft: 7,
		marginRight: 7,
		fontSize: 17
	}
})