console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';

import Routes from '../src/component/Routes';
import Firebase from 'firebase';

export default class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        })
    }
    render() {
        return (
            <Routes/>
        );
    }
}

