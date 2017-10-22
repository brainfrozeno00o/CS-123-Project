import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import { login } from '../redux/actions/auth';
import Container from '../src/components/Container';
import ButtonCustom from '../src/components/ButtonCustom';
import Label from '../src/components/Label';
 
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
 
    render () {
        let alt = (this.state.route === 'Login') ? 'Sign Up' : 'Login';
        return (
            this.loginPage2(alt)
        )
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
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);