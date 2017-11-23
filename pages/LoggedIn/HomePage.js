import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, Navigation, ActivityIndicator, FlatList, AppRegistry, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import '../../App';

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading:true
		}
	}

	getFavors = () => {
		return fetch('http://192.168.0.42/showAllFavors.php')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataSource: responseJson
				}, function () {

				})
			})
			.catch((error) => {
				console.error(error);
			});
	}

	FlatListItemSeparator = () => {
		return (
			<View 
				style = {{
					height: 1,
					width: "100%",
					backgroundColor: "#607D8B",
				}}
			/>
		);
	}


	render() {
		/*if(this.state.isLoading) {
			return (
				<View
					style = {{ flex: 1,
								backgroundColor: '#2980b9'
								paddingTop: 100
							}}>
					<ActivityIndicator />
				</View>
			);
		}*/

		return (
			<KeyboardAvoidingView 
				behavior="padding" 
				style={styles.container}>
				<Text
					style={styles.title}>
					Welcome to Gofer
				</Text>
				<View
					style = {styles.MainContainer}>
					<FlatList
						data = { this.state.dataSource }
						ItemSeparatorComponent = {this.FlatListItemSeparator}
						keyExtractor={(item, index) => index}
          			/>
          		</View>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('PostFavorForm')}
					style={styles.buttonContainer}>
					<Text
						onPress={() => this.props.navigation.navigate('PostFavorForm')}
						style={styles.buttonText}>
						Post a Favor
					</Text>
				</TouchableOpacity>
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
	MainContainer: {
		justifyContent: 'center',
		flex:1,
		margin: 10,
	},
	FlatListItemStyle: {
    	padding: 10,
    	fontSize: 18,
    	height: 44,
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

})