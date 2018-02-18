import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import { 
    Text,
    View,
    StyleSheet,
} from 'react-native';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
    render() {
        return(
            <LoginForm />
        );
    }
}
export default LoginPage;

