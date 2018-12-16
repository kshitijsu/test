import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component{
    render() {
      return (
          <View style={styles.container}>
            <Image
                style={{width: 100, height: 100}}
                source={require('../images/t2.png')}
            />
            <Text style={styles.logotext}>Welcome to TAXI CUBE</Text>
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
    logotext:{
        marginVertical: 20,
        fontSize:20,
        color:'white',
        fontWeight: 'bold',
    }
  });