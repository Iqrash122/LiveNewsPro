

import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Grid from '../../../assets/Icons/grid.svg';
import List from '../../../assets/Icons/list.svg';
import AbcNews from '../../../assets/images/abcNews.png';
import GridView from '../../../components/GirdView'; // Adjust the import path as needed
import ListView from '../../../components/ListView'; // Adjust the import path as needed
const homeContent = [
  {
    id: 1,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""
  },
  {
    id: 2,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""

  },
  {
    id: 3,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""

  },
  {
    id: 4,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""

  },
  {
    id: 5,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""

  },
  {
    id: 6,
    image1: AbcNews,
    title: 'ABC News',
    videoUrl:""

  },
  {
    id: 7,
    image1: AbcNews,
    title: 'CNN News',
    videoUrl:""

  },
  {
    id: 8,
    image1: AbcNews,
    title: 'CNN News',
    videoUrl:""

  },
  {
    id: 9,
    image1: AbcNews,
    title: 'CNN News',
    videoUrl:""

  },
  {
    id: 10,
    image1: AbcNews,
    title: 'CNN News',
    videoUrl:""
    

  },
  
];

const HomeLayout = () => {
  const [searchText, setSearchText] = useState('');
  const inset = useSafeAreaInsets();
  const [viewMode, setViewMode] = useState('list');
  const [filteredHomeContent, setFilteredHomeContent] = useState(homeContent);
  const navigation = useNavigation();
  const [title, setTile] = useState(null);


  const inputHandler = (text) => {
    const lowerCase = text.toLowerCase();
    setSearchText(lowerCase);

    const filtered = homeContent.filter((channel) =>
      channel.title.toLowerCase().includes(lowerCase)
    );
    setFilteredHomeContent(filtered);
  };


  const handlePress = (item) => {
    console.log("Navigating with title:", item.title);
    navigation.navigate('VideoScreen', {
      id: item.id,
      title: item.title,
      videoUrl: item.videoUrl,
      image: item.image1
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: inset.top,
          paddingLeft: inset.left,
          paddingRight: inset.right,
          paddingBottom: inset.bottom,
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <View style={styles.headerStyle}>
          <View>
            <Text style={{ fontSize: 20, color: 'black', fontWeight:'bold' }}>Watch New</Text>
            <Text style={{ fontSize: 30, color: '#ffb251', fontWeight: 'bold' }}>
              News Channel
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              rowGap: 5,
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  setViewMode('list');
                }}
                style={[styles.iconButton, viewMode === 'list' && styles.activeIconButton]}
              >
                <List  />
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  setViewMode('grid');
                }}
                style={[styles.iconButton, viewMode === 'grid' && styles.activeIconButton]}
              >
                <Grid />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.defaultContainer}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: '#3628B7',
              borderRadius: 5,
            }}
          >
            <TextInput
              value={searchText}
              style={{ width: '85%', marginLeft: 10, padding: 3, flex: 1 }}
              placeholder="search channels"
              placeholderTextColor={'#3628B773'}
              onChangeText={inputHandler}
            />
            <EvilIcons name="search" size={24} color="#3628B7" style={{ marginRight: 10 }} />
          </View>
        </View>

        
        <View style={styles.flatList}>
          {viewMode === 'grid' ? (
            <GridView
              data={filteredHomeContent}
              viewMode={viewMode}
              onPress={handlePress}
            />
          ) : (
            <ListView
              data={filteredHomeContent}
              viewMode={viewMode}
              onPress={handlePress}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginLeft:5
  },
  activeIconButton: {
    backgroundColor: '#3628B7',
  },
  defaultContainer: {
    padding: 16,
  },
  flatList: {
    flex: 1,
  },
});

export default HomeLayout;
