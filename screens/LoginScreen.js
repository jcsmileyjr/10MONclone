import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import AppTitle from '../components/AppTitle.js'

export default class LoginScreen extends React.Component {
  static navigationOptions ={
    headerTitle: <AppTitle />,
    headerStyle:{backgroundColor:"navy"}
  }  
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputSections}>
          <View>
            <Text style={styles.labelStyle}>Player Name</Text>
            <TextInput placeholder="Mary Runner" style={styles.inputBoxStyle} />
          </View>
          <View>
            <Text style={styles.labelStyle}>Password</Text>
            <TextInput placeholder="1" style={styles.inputBoxStyle} />
          </View>
        </View>
        <TouchableOpacity 
          style={styles.submitButtonSection} >
          <Text style={styles.buttonStyle}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.inspirationSection}>
          <Text style={styles.inspirationHeader}>Ramdom Inspirational Quote of the Day</Text>
          <Text style={styles.inspirationData}>You are What you eat, so don't be FAST, CHEAP, EASY, or FAKE</Text>
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:"#ADD8E6"
  },
  labelStyle:{
    color: "black",
    fontWeight:"bold",
    fontSize:18
  },
  inputBoxStyle:{
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    backgroundColor:"white",
    marginTop: 10,
    textAlign:"center",
    color:"#404040"
  },
  inputSections:{
    flex: 2,
    justifyContent:"center"
  },
  submitButtonSection:{
    flex:1,
    alignItems:"center",
    marginTop:20
  },    
  buttonStyle:{
    backgroundColor:"gold",
    borderColor:"gold",
    borderWidth:1,
    borderRadius:10,
    color:"black",
    fontSize:24,
    fontWeight:"bold",
    padding:12,
    textAlign:"center",
    overflow:"hidden",
    width:"50%",
    elevation: 1
  },
  inspirationSection:{
    flex: 1
  },
  inspirationHeader:{
    textAlign:"center",
    fontWeight:"bold"
  },
  inspirationData:{
    textAlign:"center"
  }
    
    
});


