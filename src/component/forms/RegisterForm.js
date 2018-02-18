import React , { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class RegisterForm extends Component {
    onSubmit() {
        Actions.pop();
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        P&S-LOCKER
                    </Text>
                    <Text style={{marginVertical : 15, color:'#778899'}}>
                        Register account by Firebase
                    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Name'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    // value={this.state.email}
                    // onBlur = {this.checkEmail}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Re-Password'
                    secureTextEntry
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Tel.'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop : 20,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 6,
        paddingLeft : 15,
        fontSize : 17,
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : 'white',
        padding : 10,
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
    alertText: {
        color : '#660000'
    }
  });