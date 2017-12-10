import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, Navigation, ActivityIndicator, FlatList, AppRegistry, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import '../../App';
var pushedArrays = [];
export default class HomePage extends Component {
	constructor(props) {
		super(props);
		//create array for title, name of user, location, date
		this.state = {
			isLoading:true,
			dataSource:null
		}
		fetch('http://192.168.2.120/showAllFavors.php',{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				currentUser: 'Elmo',
			})
		}).then((response) => response.json())
		.then((responseJson) =>{
			this.setState({
				isLoading:false,
				dataSource:responseJson,
			}, function(){

			});
		})
		.catch((error) => console.log(error))
	}

	FlatListItemSeparator = () => {
		return (
			<View 
				style = {{
					height: 1,
					width: "100%",
					backgroundColor: "#2980b9",
				}}
			/>
		);
	}

	GetFlatListItem (favor, description){
		Alert.alert('Favor Title: ' + favor, 
					'Favor Description: ' + description, 
					[
						{text: 'Accept', onPress: () => console.log('Test: accepted favor')},
						{text: 'Back', onPress: () => console.log('Test: favor not accepted')},
					]
		);
	}

	render() {
		if(this.state.isLoading) {
			return (
				<View
					style = {{ flex: 1,
								backgroundColor: '#2980b9',
								paddingTop: 100,
							}}>
					<ActivityIndicator/>
				</View>
			);
		}else{
			if(this.state.dataSource === "No favors to show!"){
				return (
					<KeyboardAvoidingView 
						behavior="padding" 
						style={styles.container}>
						<Text
							style={styles.title}>
							Welcome to Gofer, {this.props.navigation.state.params.name}
						</Text>
						<View style = {styles.MainContainer}>		
		          		</View>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('PostFavorForm', {name: this.props.navigation.state.params.name})}
							style={styles.buttonContainer}>
							<Text
								onPress={() => this.props.navigation.navigate('PostFavorForm', {name: this.props.navigation.state.params.name})}
								style={styles.buttonText}>
								Post a Favor
							</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				);
			}else{
				return (
					<KeyboardAvoidingView 
						behavior="padding" 
						style={styles.container}>
						<Text
							style={styles.title}>
							Welcome to Gofer, {this.props.navigation.state.params.name}
						</Text>
						<View style = {styles.MainContainer}>	
							<FlatList
								data = {this.state.dataSource}
								ItemSeparatorComponent = {this.FlatListItemSeparator}
								renderItem={({item}) => (
									<Text style={styles.FlatListItemStyle} 
									onPress={this.GetFlatListItem.bind(this, item.title, item.description)} >
									Favor Title: {item.title}{"\n"}
									Favor Requested By: {item.requested_by}{"\n"}
									Favor Issued: {item.datetime_issued}{"\n"}
									Favor Location: {item.location}
									</Text>
								)}
								keyExtractor={(item, index) => index}
							/>				
		          		</View>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('PostFavorForm', {name: this.props.navigation.state.params.name})}
							style={styles.buttonContainer}>
							<Text
								onPress={() => this.props.navigation.navigate('PostFavorForm', {name: this.props.navigation.state.params.name})}
								style={styles.buttonText}>
								Post a Favor
							</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				);
			}
		}
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
		backgroundColor: '#rgba(255,255,255,0.4)'
	},
	FlatListItemStyle: {
    	padding: 10,
    	fontSize: 18,
		height: 85,
		color: '#FFF'
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
