import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Firebase from 'firebase';

class SelectLocker extends Component {
    constructor(props) {
        super(props);
        this.lockerStatusNo1 = Firebase.database().ref().child('LockerStatus');
        this.state = {
            nameButton : 'Open',
            stateNo1 : 0,
            sendState : '0'
        }
        
        this.updateStateToFirebase = this.updateStateToFirebase.bind(this);
    };
    
    componentDidMount(){
        this.lockerStatusNo1.on('value',snap => {
            this.setState({ 
                stateNo1 : snap.val()
            });
        });
        
    }


    updateStateToFirebase()
    {
        Firebase.database().ref().update({
            LockerStatus: (this.state.stateNo1 == 0 ?  1 : 0 )
        });
    }

    render() {
        console.log(this.state);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Choose a Locker for you.
                </Text>
    {/* Locker1*/}
                <Text style={styles.locker}>
                    LOCKER No. 1
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    //onPress={() => this.updateToStatus({value : this.state.sendState})}
                    //onPress={() => this.componentDidMount()}

                    onPress={() => this.updateStateToFirebase()}
                >
                     <Text style={styles.buttonText}>{this.state.stateNo1 == 1 ? 'Open' : 'Close'}</Text>  
                </TouchableOpacity>
    {/* Locker2*/}    
                <Text style={styles.locker}>
                    LOCKER No. 2
                </Text>
                <TouchableOpacity
                    style = {styles.button}
                    //onPress={()=>}
                >
                     <Text style={styles.buttonText}>Close</Text>  
                </TouchableOpacity>
            </View>
            
        );
    }



} export default SelectLocker

const styles = StyleSheet.create({
    container: {
        marginTop : 20,
        backgroundColor : '#455a64' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    buttonText: {
        fontSize : 20,
        fontWeight : '500',
        color : 'white',
        padding : 10,
    },
    button: {
        marginBottom : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 24,
        marginBottom : 50,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
    locker: {
        fontSize: 20,
        marginVertical : 10,
        color : '#CCFFCC'
    }
});
