import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Firebase from 'firebase';

class SelectLocker extends Component {
    //Write data Firebase
    /*writeUserData({user_ID,user_name,locker_status}) {
        Firebase.database().ref('UserID/' + user_ID).set({
             UserName : user_name ,
             LockerStatus : locker_status
        });
        alert('Success Written Firebase');
    }*/

    updateToStatus({value}) {
        updates = {LockerStatus : value};
        return Firebase.database().ref().update(updates);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Choose a Locker for you.
                </Text>
    {/* Locker1*/}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.updateToStatus({value : 1})}
                    //Sent Datat to Firebase
                    /*onPress={() => this.writeUserData({
                        user_ID : 3,
                        user_name : 'Teera Thongsuwan',
                        locker_status : 1
                    })}*/
                    //onPress={() => this.writeUserdata({lockerStatus : 1})}

                >
                     <Text style={styles.buttonText}>Open</Text>  
                </TouchableOpacity>
    {/* Locker2*/}    
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => this.updateToStatus({value : 0})}
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
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 24,
        //fontWeight: 'bold',
        color : '#F5FFFA',
    },
});
