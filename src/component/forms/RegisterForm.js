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
import Validator from 'validator';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailReg : '',
            passwordReg : '',
            rePasswordReg : '',
            errorsReg : {
                emailReg : '',
                passwordReg : '',
                rePasswordReg : '',
            },
            //loading : false,
        };
        this.checkEmailReg = this.checkEmailReg.bind(this);
        this.checkPasswordReg = this.checkPasswordReg.bind(this);
        this.checkRePasswordReg = this.checkRePasswordReg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onSubmit() {
        const { emailReg ,rePasswordReg } = this.state;
        //Register Firebase
        if(this.state.emailReg != '' && this.state.passwordReg != '' && this.state.rePasswordReg != '' ){
            Firebase.auth().createUserWithEmailAndPassword(emailReg, rePasswordReg)
            .then(() => { this.setState({ errorsReg: '' }); })
            .catch(() => {
                this.setState({ errorsReg : 'Authentication failed.' });
                 alert(ths.state.errorsReg)
            });
            Actions.pop();
        } 
        else {
            alert('Please fill in the information correctly');
        }
    }
    
    checkEmailReg() {
        if(!Validator.isEmail(this.state.emailReg)) {
            this.setState({ errorsReg: {...this.state.errorsReg, emailReg: 'Not email format' } });
        }
        else { 
            this.setState({ errorsReg: {...this.state.errorsReg, emailReg: '' } });
        }
    }
    checkPasswordReg() {
        if (this.state.passwordReg.length < 7 ) {
            this.setState({ errorsReg: {...this.state.errorsReg, passwordReg: 'More than 8 charactor' } });
        } 
        else {
            this.setState({ errorsReg: {...this.state.errorsReg, passwordReg: '' } });
        }
    }
    checkRePasswordReg() {
        if (this.state.rePasswordReg != this.state.passwordReg) {
            this.setState({ errorsReg: {...this.state.errorsReg, rePasswordReg: 'Passwords do not match' }});
            console.log(this.state);
        }
        else {
            this.setState({ errorsReg: {...this.state.errorsReg, rePasswordReg: '' }});
            console.log(this.state);
        }
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
    {/* Name */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Name'
                />
                <Text style={styles.alertText}>{}</Text>
    {/* Email */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    onChangeText={(emailReg) => this.setState({emailReg: emailReg.toLowerCase()})}
                    value={this.state.emailReg}
                    onBlur = {this.checkEmailReg}
                />
                <Text style={styles.alertText}>{this.state.errorsReg.emailReg}</Text>
    {/* Password */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(passwordReg) => this.setState({passwordReg})}
                    value={this.state.passwordReg}
                    onKeyPress={this.checkPasswordReg}

                />
                <Text style={styles.alertText}>{this.state.errorsReg.passwordReg}</Text>
    {/* Re-Password */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Re-Password'
                    secureTextEntry
                    onChangeText={(rePasswordReg) => this.setState({rePasswordReg})}
                    value={this.state.rePasswordReg}
                    onBlur = {this.checkRePasswordReg}
                />
                <Text style={styles.alertText}>{this.state.errorsReg.rePasswordReg}</Text>
    {/* Tel. */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Tel.'
                />
    {/* Button Register */}
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
        marginVertical : 3,
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
        color : '#660000',
        fontSize : 14,
    }
  });