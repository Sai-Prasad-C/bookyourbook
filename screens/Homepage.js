import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CreateStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home Page</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250322",
  },
  input: {
    padding: "2%",
    margin: "3%",
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  login: {
    marginTop: "3%",
    width: 150,
    backgroundColor: "#F2920B",
    padding: "2%",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default Homepage;