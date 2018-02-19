console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';

import Routes from '../src/component/Routes';
import Firebase from 'firebase';
//import Config from 'react-native-config';

export default class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: "up to you",
            authDomain: "up to you",
            databaseURL: "up to you",
            projectId: "up to you",
            storageBucket: "up to you",
            messagingSenderId: "up to you"
        })
    }
    render() {
        return (
            <Routes/>
        );
    }
}

