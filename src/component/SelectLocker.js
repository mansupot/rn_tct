import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class SelectLocker extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Choose a Locker for you.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.on}
                >
                     <Text style={styles.buttonText}>Locker 1</Text>  
                </TouchableOpacity>
            
                <TouchableOpacity
                    style = {styles.button}
                    onPress={this.onPress}
                >
                     <Text style={styles.buttonText}>Locker 2</Text>  
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
