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
        <View style={styles.rankingHeadingSection}>
          <View style={styles.rankingHeading}><Text>Rank</Text></View>
          <View style={styles.rankingHeading}><Text>Player Name</Text></View>
          <View style={styles.rankingHeading}><Text>Total Weight Loss</Text></View>
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
  },
  rankingHeadingSection:{
    flex: 5,
    flexDirection: "row",
    alignItems:"center"
  },
  rankingHeading:{
    flex: 1
  }
    
});