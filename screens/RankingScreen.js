import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import AppTitle from '../components/AppTitle.js'

export default class RankingScreen extends React.Component {
  static navigationOptions ={
    headerTitle: <AppTitle />,
    headerStyle:{backgroundColor:"navy"}
  }  
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.pageTitle}><Text>Player Ranking</Text></View>
        <View>
        
        
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#ADD8E6"
  },
  pageTitle:{
    flex: 1,
    alignItems:"center",
    fontSize:18
  } 
    
});