import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default Homepage = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchPress = () => {
    setIsSearchExpanded(true);
  };

  const handleTextChange = (text) => {
    setSearchText(text);
  };

  const searchOnFocus = () => {
    setIsFocused(true);
  };

  const searchOnBlur = () => {
    setIsFocused(false);
    setIsSearchExpanded(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#250322"
      />
      <View style={styles.searchBar}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BookYourBook</Text>
        </View>
        {isSearchExpanded ? (
          <View style={styles.expandedSearchContainer}>
            <TextInput
              style={[
                styles.searchInput,
                isFocused && styles.focusedSearchInput,
              ]}
              placeholder="Search for books..."
              value={searchText}
              onChangeText={handleTextChange}
              onFocus={searchOnFocus}
              onBlur={searchOnBlur}
            />
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                // borderRadius: 20,
                // marginRight:10,
              }}
              onPress={() => {
                setIsSearchExpanded(false);
                setSearchText('');
              }}>
              <Feather name="search" size={18} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.searchContainer}
            onPress={handleSearchPress}>
            <Feather name="search" size={18} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal={true} style={styles.topImageContainer}>
        <ImageBackground style={styles.topImage} source={require('../images/topImage.png')} resizeMode="contain" >
          <Text style={{ color: 'white', marginTop: 10, marginLeft: 10 }}>
            Find out the best books to read
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            When you don't even know what
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>To read!!!</Text>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 12, color: '#F89182' }}>Explore</Text>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.topImage} source={require('../images/topImage.png')} resizeMode="contain" >
          <Text style={{ color: 'white', marginTop: 10, marginLeft: 10 }}>
            Find out the best books to read
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            When you don't even know what
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>To read!!!</Text>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 12, color: '#F89182' }}>Explore</Text>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.topImage} source={require('../images/topImage.png')} resizeMode="contain">
          <Text style={{ color: 'white', marginTop: 10, marginLeft: 10 }}>
            Find out the best books to read
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            When you don't even know what
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>To read!!!</Text>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 12, color: '#F89182' }}>Explore</Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    backgroundColor: '#250322',
  },
  topImageContainer: {
    // padding: '2%',
    margin: '3%',
    borderWidth: 0,
    height:'20%',
    width: '90%',
    borderRadius: 11,
  },
  topImage: {
    marginRight: 16,
    width:350,
    height:160,
  },
  button: {
    marginTop: 15,
    marginLeft: 12,
    width: 65,
    height: 28,
    backgroundColor: '#FFF',
    // padding: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    // paddingTop: 20,
    marginTop: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  expandedSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    width: 20,
    height: 25,
    borderWidth: 0,
  },
  focusedSearchInput: {
    borderColor: 'transparent',
  },
});
