import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import Logo from '../components/logo'
import Form from '../components/form'

export default class Signup extends Component{
    render() {
      return (
          <View style={styles.container}>
              <Logo/>
              <Form type="Sign Up"/>
              <View style={styles.register}>
                  <Text style={styles.text}>Already have an account?</Text>
                  <Text style={styles.signupbtn}> Sign In</Text>
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
      backgroundColor: '#455A64',
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