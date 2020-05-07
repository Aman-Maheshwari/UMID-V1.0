import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';


export default class SignupScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});