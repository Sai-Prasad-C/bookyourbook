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
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone Number"
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
        onPress={() => navigation.navigate("Homepage")}
        title="   Login   "
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
      </Pressable>
    </View>
  );
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
