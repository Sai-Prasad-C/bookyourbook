import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
