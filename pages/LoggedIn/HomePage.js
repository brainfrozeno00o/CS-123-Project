import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, Navigation, ActivityIndicator, FlatList, AppRegistry, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import '../../App';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		//create array for title, name of user, location, date
		this.state = {
			isLoading:true,
			// currentUser:'Elmo'
		}
		var favorTitles = [], favorRequesters = [], favorDateTime = [], favorLocations = []; //you can do it without this, this is for testing
		fetch('http://192.168.254.104/showAllFavors.php',{ //please change to your corresponding address
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				currentUser: 'Elmo', //this is just for the php file
			})
		}).then((response) => response.json())
		.then((responseJson) =>{
			var favorList = responseJson; //get JSON as a new variable
			var numberOfFavors = favorList.length; //gets the length of the JSON object
			console.log(favorList); //will print the whole JSON object
			for(var key in favorList){ //loop through the JSON Object Array
				if(favorList.hasOwnProperty(key)){
					favorTitles.push(favorList[key].title); //get the title
					favorRequesters.push(favorList[key].requested_by); //get the user of the one who requested the favor
					favorDateTime.push(favorList[key].datetime_issued); //get the date and time due
					favorLocations.push(favorList[key].location); //get the location
				}
			}
			for(var j = 0; j < numberOfFavors; j++){ //test if it goes to the array
				console.log("Favor " + (j + 1) + ": ");
				console.log("Favor Title: " + favorTitles[j]);
				console.log("Favor Requested By: " + favorRequesters[j]);
				console.log("Favor Due Date: " + favorDateTime[j]);
				console.log("Favor Location: " + favorLocations[j] + "\n");
			}
		})
		.catch((error) => console.log(error))
		.done();
	}


	getFavors = () => {
/*		fetch('http://192.168.254.104/showAllFavors.php',{})
			.then((response) => console.log(response))
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataSource: responseJson
				}, function () {
					//console.log(dataSource);
				})
			})
			.catch((error) => {
				console.error(error);
			});*/

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
