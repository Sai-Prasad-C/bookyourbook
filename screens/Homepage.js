import React, { useState, useRef } from 'react';
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
  FlatList,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default Homepage = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const topImageRef = useRef();

  const images = [
    { id: 1, source: require('../images/topImage.png') },
    { id: 2, source: require('../images/topImage.png') },
    { id: 3, source: require('../images/topImage.png') },
  ];

  const handleImageSwipe = (index) => {
    setCurrentIndex(index);
  };
  const renderImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.topImage}
          source={item.source}
          resizeMode="contain">
          <Text style={{ color: 'white', marginTop: 10, marginLeft: 10 }}>
            Find out the best books to read
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            When you don't even know what
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>To read!!!</Text>
          <Pressable style={styles.button} onPress={handleExplore}>
            <Text style={{ fontSize: 12, color: '#F89182' }}>Explore{currentIndex}</Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  };
  const renderDot = (index) => {
    const isActive = index === currentIndex;
    return (
      <TouchableOpacity
        key={index}
        disabled={true}
        style={[styles.dot, isActive && styles.activeDot]}
        onPress={() => handleImageSwipe(index)}
      />
    );
  };
  const handleExplore = () => {
    Alert.alert("Nothing to show")
  }

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
      <View style={{height:190}}>
      <FlatList
        ref = {topImageRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        renderItem={renderImage}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          handleImageSwipe(index);
        }}
        contentContainerStyle={styles.topImageContainer}
      />
      </View>
      <View style={styles.dotsContainer}>
        {[0, 1, 2].map((index) => renderDot(index))}
      </View>
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
    // paddingBottom: '2%',
    margin: '5%',
    height: 160,
    // borderRadius: 11,
  },
  topImage: {
    marginRight: 16,
    width: 350,
    height: 160,
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 65,
    backgroundColor: '#F2920B',
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
