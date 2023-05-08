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
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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

  const DATA = [
  {
    id: '1',
    category: 'Fiction',
    books: [
      { id: '1', title: 'Book 1', image: require('../images/waltdisney.png') },
      { id: '2', title: 'Book 2', image: require('../images/waltdisney.png') },
      { id: '3', title: 'Book 3', image: require('../images/waltdisney.png') },
      { id: '4', title: 'Book 4', image: require('../images/waltdisney.png') },
      { id: '5', title: 'Book 5', image: require('../images/waltdisney.png') },
      { id: '6', title: 'Book 6', image: require('../images/waltdisney.png') },
      { id: '7', title: 'Book 7', image: require('../images/waltdisney.png') },
      { id: '8', title: 'Book 8', image: require('../images/waltdisney.png') },
      { id: '9', title: 'Book 9', image: require('../images/waltdisney.png') }
    ],
  },
  {
    id: '2',
    category: 'Non-Fiction',
    books: [
      { id: '10', title: 'Book 10', image: require('../images/waltdisney.png') },
      { id: '11', title: 'Book 11', image: require('../images/waltdisney.png') },
      { id: '12', title: 'Book 12', image: require('../images/waltdisney.png') },
      { id: '13', title: 'Book 13', image: require('../images/waltdisney.png') },
      { id: '14', title: 'Book 14', image: require('../images/waltdisney.png') },
      { id: '15', title: 'Book 15', image: require('../images/waltdisney.png') },
      { id: '16', title: 'Book 16', image: require('../images/waltdisney.png') },
      { id: '17', title: 'Book 17', image: require('../images/waltdisney.png') },
      { id: '18', title: 'Book 18', image: require('../images/waltdisney.png') }
    ],
  },
  {
    id: '3',
    category: 'Mystery',
    books: [
      { id: '19', title: 'Book 19', image: require('../images/waltdisney.png') },
      { id: '20', title: 'Book 20', image: require('../images/waltdisney.png') },
      { id: '21', title: 'Book 21', image: require('../images/waltdisney.png') },
      { id: '22', title: 'Book 22', image: require('../images/waltdisney.png') },
      { id: '23', title: 'Book 23', image: require('../images/waltdisney.png') },
      { id: '24', title: 'Book 24', image: require('../images/waltdisney.png') },
      { id: '25', title: 'Book 25', image: require('../images/waltdisney.png') },
      { id: '26', title: 'Book 26', image: require('../images/waltdisney.png') },
      { id: '27', title: 'Book 27', image: require('../images/waltdisney.png') }
    ],
  },
  {
    id: '4',
    category: 'Biography',
    books: [
      { id: '28', title: 'Book 28', image: require('../images/waltdisney.png') },
      { id: '29', title: 'Book 29', image: require('../images/waltdisney.png') },
      { id: '30', title: 'Book 30', image: require('../images/waltdisney.png') },
      { id: '31', title: 'Book 31', image: require('../images/waltdisney.png') },
      { id: '32', title: 'Book 32', image: require('../images/waltdisney.png') },
      { id: '33', title: 'Book 33', image: require('../images/waltdisney.png') },
      { id: '34', title: 'Book 34', image: require('../images/waltdisney.png') },
      { id: '35', title: 'Book 35', image: require('../images/waltdisney.png') },
      { id: '36', title: 'Book 36', image: require('../images/waltdisney.png') }
    ],
  },
  {
    id: '5',
    category: 'All',
    books: [DATA]
  }
];

  const [selectedCategory, setSelectedCategory] = useState('Fiction');

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.category && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.category)}>
      <Text style={styles.categoryTitle}>{item.category}</Text>
    </TouchableOpacity>
  );
    
  const renderBookItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.image} style={styles.bookImage} />

      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  );

  const filteredBooks = DATA.find(
    (category) => category.category === selectedCategory
  )?.books;

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
          <Text style={{ color: 'white', marginTop: 15, marginLeft: 10 }}>
            Find out the best books to read
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            When you don't even know what
          </Text>
          <Text style={{ color: 'white', marginLeft: 10 }}>To read!!!</Text>
          <Pressable style={styles.button} onPress={handleExplore}>
            <Text style={{ fontSize: 12, color: '#F89182' }}>Explore</Text>
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
      <View >
      <Text style={styles.category}>Categories</Text>
      <View style={{height:30, marginLeft:16}}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
      />
      </View>
      {/* <ScrollView> */}
        <View style={{flex:1, flexGrow: 1, justifyContent:"center",alignItems:'center'}}>
      <FlatList
        data={filteredBooks}
        numColumns={3}
        vertical={true}
        // style={{flex:1}}
        contentContainerStyle={styles.bookListContainer}
        // showsVerticalScrollIndicator={false}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
      />
      </View>
      {/* </ScrollView> */}
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
    // width: '95%',
    // borderRadius: 11,
  },
  topImage: {
    marginRight: 16,
    width: 330,
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
  bookContainer: {
    // flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 40,
    // backgroundColor: '#fff',
    // width: '90%',
    // height: '100%',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 12,
    color: 'white',
  },
  categoryItem: {
    // paddingVertical: 10,
    height: 25,
    paddingHorizontal: 10,
    // backgroundColor: '#f2f2f2',
    // borderRadius: 20,
    marginRight: 10,
    // marginLeft: 20,
  },
  selectedCategoryItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#F2920B',
  },
  categoryTitle: {
    fontSize: 10,
    // fontWeight: 'bold',
    color: 'white',
  },
  bookContainer: {
    width: "33.33%",
    alignItems: 'center',
    marginTop: 20,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  bookListContainer: {
    paddingBottom: 20,
  },
});
