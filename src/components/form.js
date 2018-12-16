import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Logo extends Component{
    constructor() {
        super()
        this.state = {
          active: ''
        };
      }

    render() {
      return (
          <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor="white"/>
            <TextInput
                style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="white"/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Login</Text>
            </TouchableOpacity>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    inputBox:{
        width:350,
        fontSize: 25,
        backgroundColor: 'rgba(  244, 220, 173 ,0.2)',
        height:50,
        borderRadius: 25,
        paddingHorizontal: 15,
        color:'black',
        marginVertical: 10,
    },
    btn:{
        width:350,
        fontSize: 25,
        backgroundColor: '#1C313A',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 13,
    },
    btntxt:{
        fontSize:20,
        fontWeight: '500',
        color:'white',
        textAlign:'center'
    }
});