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
        <View style={styles.rankingSection}>
          <View style={styles.rankingHeading}>
            <View ><Text>Rank</Text></View>
            <View ><Text>Player Name</Text></View>
            <View ><Text>Total Weight Loss</Text></View>
          </View>
          <View style={styles.rankingHeading}>
            <View ><Text>1</Text></View>
            <View ><Text>Swaying Elephant</Text></View>
            <View ><Text>9.8 lbs</Text></View>
          </View>
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
  rankingSection:{
    flex: 3,
    alignItems:"center"
  },
  rankingHeading:{
    flex: 1,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-around"
  }
    
});