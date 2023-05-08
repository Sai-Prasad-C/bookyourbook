import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from './Homepage.js';
import Library from './Library.js';
import Profile from './Profile.js';
import Request from './Request.js';

const Bottom = createBottomTabNavigator();

export default BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle:{height:68,paddingBottom:10}}}>
      <Bottom.Screen
        name="My Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/library.png')}
                style={{
                  width: 26,
                  height: 26,
                  tintColor: tabInfo.focused ? '#F2920B' : '#BFBFBF',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/home.png')}
                style={{
                  width: 23,
                  height: 23,
                  tintColor: tabInfo.focused ? '#F2920B' : '#BFBFBF',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Requests"
        component={Request}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/book.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#F2920B' : '#BFBFBF',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../images/profile.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: tabInfo.focused ? '#F2920B' : '#BFBFBF',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
