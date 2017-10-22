import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, TextInput, View, Dimensions, Image, Button } from 'react-native';
import { login } from '../redux/actions/auth';
import Container from '../src/components/Container';
import ButtonCustom from '../src/components/ButtonCustom';
import Label from '../src/components/Label';
// import Button from 'apsl-react-native-button'

var { height } = Dimensions.get('window');
var box_count = 2;
var box_height = height / box_count;

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
    }
 
    userLogin (e) {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'Sign Up' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }
 
    loginPage(alt) {
        return <ScrollView style={styles.scroll}>
            <Text style={{ fontSize: 27 }}>{this.state.route}</Text>
            <TextInput placeholder='Username' autoCapitalize='none' autoCorrect={false} autoFocus={true} keyboardType='email-address' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} />
            <TextInput placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
            <View style={{ margin: 7 }} />
            <Button onPress={(e) => this.userLogin(e)} title={this.state.route} />
            <Text style={{ fontSize: 16, color: 'blue' }} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
        </ScrollView>;
    }

    loginPage2(alt) {
        return <ScrollView style={styles.scroll}>
            <Container>
                <Text style={{ fontSize: 27 }}>{this.state.route}</Text>
            </Container>

            <Container>
                <Label text="Username or Email" />
                <TextInput style={styles.textInput} placeholder='Username' autoCapitalize='none' autoCorrect={false} autoFocus={true} keyboardType='email-address' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} />
            </Container>

            <Container>
               <Label text="Password" />
               <TextInput style={styles.textInput} placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
            </Container>

            <View>
                <Container>
                    <ButtonCustom styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} onPress={(e) => this.userLogin(e)} label={this.state.route} />
                </Container>
                <Container>
                    <Text style={{ fontSize: 16, color: 'blck' }} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
                </Container>
            </View>
        </ScrollView>;
    }

    loginPage3(alt) {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <Text style={{ fontSize: 27 }}>{this.state.route}</Text>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <Image source={require('../src/images/tempLogo.png')} />
                    <View style={{ margin: 7 }} />
                    <TextInput style={styles.textInput} placeholder='Username' autoCapitalize='none' autoCorrect={false} autoFocus={true} keyboardType='email-address' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} />
                    <View style={{ margin: 7 }} />
                    <TextInput style={styles.textInput} placeholder='Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
                    <View style={{ margin: 14 }} />
                    <View style={styles.buttonActionContainer}>
                        <Button color='white' onPress={(e) => this.userLogin(e)} title={this.state.route} />
                    </View>
                    <View style={{ margin: 7 }} />
                    <View style={styles.buttonAltContainer}>
                        <Button color='white' onPress={(e) => this.toggleRoute(e)} title={alt} />
                    </View>
                </View>
            </View>
        );
    }

    render () {
        let alt = (this.state.route === 'Login') ? 'Sign Up' : 'Login';
        return (
            this.loginPage3(alt)
        )
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        flex: 1
    },
    box1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#2196F3'
    },
     box2: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#8BC34A'
    },
    buttonLogin: {
        // width: '40%',
        borderColor: '#2ecc71',
        backgroundColor: '#2ecc71',
        borderRadius: 22,
    },
    buttonActionContainer: {
        backgroundColor: '#2E9298',
        width: '40%',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
    buttonAltContainer: {
        backgroundColor: '#2E9298',
        width: '40%',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
    textInput: {
        height: 35,
        width: '75%',
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
});

{/* const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 18,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 50
    }
}); */}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);