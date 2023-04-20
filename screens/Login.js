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

class Login extends Component {
  constructor(args) {
    super(args);
    this.state = { username: "", password: "" };
  }

  onLogin() {
    const { username, password } = this.state;
    if (username == "8888888888" && password == "123") {
      Alert.alert("Successfully Logged in");
    } else {
      Alert.alert("User not found");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone Number without +91"
          maxLength={10}
          style={styles.input}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
        />
        <Pressable
          style={styles.login}
          onPress={this.onLogin.bind(this)}
          title="   Login   "
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
        </Pressable>
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

export default Login;
