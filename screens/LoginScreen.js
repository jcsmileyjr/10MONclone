import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AppTitle from '../components/AppTitle.js'

export default class LoginScreen extends React.Component {
  static navigationOptions ={
    headerTitle: <AppTitle />,  
  }  
  
  render(){
    return(
      <View>
        <Text>Log in</Text>  
      </View>
    
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1
    
  }    
    
});


