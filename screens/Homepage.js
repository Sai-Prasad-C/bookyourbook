import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default Homepage = () => {
  return (
    <View style={styles.container}>
      <Text> Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
