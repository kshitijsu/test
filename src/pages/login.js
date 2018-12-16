import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Actions, Router} from 'react-native-router-flux'

import Logo from '../components/logo'
import Form from '../components/form'

export default class Login extends Component{
    sign(){
        Actions.signup()
    }
    render() {
      return (
          <View style={styles.container}>
              <Logo/>
              <Form type="Login"/>
              <View style={styles.register}>
                  <Text style={styles.text}>New User? </Text>
                  <TouchableOpacity onPress={this.sign}>
                  <Text style={styles.signupbtn}> Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb( 245, 197, 101 )',
    },
    register:{
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingVertical: 25,
      flexDirection: 'row',
    },
    text:{
        color:'white',
        fontSize: 18,
    },
    signupbtn:{
        color:'white',
        fontWeight: '700',
        fontSize:18,
    }
  });