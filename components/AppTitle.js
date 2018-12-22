import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppTitle extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>Chasing the 10 Pound Monster</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    backgroundColor:"navy"
  },
  titleText:{
    color: "white",
    fontSize: 24,
    fontWeight:"bold"
  }
    
});