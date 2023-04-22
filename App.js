import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import Homepage from "./Screens/Homepage.js";
import Login from "./Screens/Login.js";
import BottomNavigator from "./Screens/BottomNavigator.js";
import Home from "./Screens/Home.js";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Chintu"
          component={Login}
        />
        <Stack.Screen options={{ headerShown: false }} name="Homepage" component={Homepage} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
