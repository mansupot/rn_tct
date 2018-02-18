console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';
//import LoginPage from './component/pages/LoginPage';

import Routes from '../src/component/Routes';

export default class App extends Component {
    render() {
        return (
            <Routes/>
        );
    }
}

