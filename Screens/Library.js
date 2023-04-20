import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
  Image,
  StatusBar,
} from 'react-native';

class Home extends Component {
    render () {
      return(
        <View style={{flex:1,}}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Library Page</Text>
        </View>
      )
    }
  }
  export default Home