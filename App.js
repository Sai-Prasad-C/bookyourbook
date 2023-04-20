import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CreateStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";

const Stack = CreateStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Homepage" component={Homepage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
