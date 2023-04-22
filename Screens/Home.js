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
import BottomNavigator from "./BottomNavigator.js";

export default Home = () => {
      return(
        <View style={{flex:1,}}>
          <BottomNavigator/>
        </View>
      )
  }