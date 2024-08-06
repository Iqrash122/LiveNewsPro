

import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Grid from '../../../assets/Icons/grid.svg';
import List from '../../../assets/Icons/list.svg';
import AbcNews from '../../../assets/images/abcNews.png';
import GridView from '../../../components/GirdView';
import ListView from '../../../components/ListView';

const homeContent = [
  {
    id: 1,
    image1: 'https://livenewspro.com/wp-content/uploads/2022/04/ABC-News-2.png',
    title: 'ABC News',
    videoUrl:'https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8'
  },
  {
    id: 2,
    image1: 'https://livenewspro.com/wp-content/uploads/2022/04/AL-JAZEERA.png',
    title: 'AL JAZEERA',
    videoUrl:"https://live-hls-web-aje.getaj.net/AJE/index.m3u8"

  },
  {
    id: 3,
    image1: AbcNews,
    title: 'BBC News',
    videoUrl:"https://watchnews.pro/wp-content/streamings/bbcz.php?file=playlist.m3u8"

  },
  {
    id: 4,
    image1: AbcNews,
    title: 'Bloomberg',
    videoUrl:"https://liveprodusphoenixeast.global.ssl.fastly.net/USPhx-HD/Channel-TX-USPhx-AWS-virginia-1/Source-USPhx-16k-1-s6lk2-BP-07-03-0Yn1cQZHOtP_live.m3u8"

  },
  {
    id: 5,
    image1: AbcNews,
    title: 'C-SPAN',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/cspanapp.php?file=index.m3u8"

  },
  {
    id: 6,
    image1: AbcNews,
    title: 'CBC',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/cbcapp.php?file=index.m3u8"

  },
  {
    id: 7,
    image1: AbcNews,
    title: 'CBS News',
    videoUrl:"https://www.cbsnews.com/common/video/cbsn-ny-prod.m3u8"

  },
  {
    id: 8,
    image1: AbcNews,
    title: 'CNBC News',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/cnbcapp.php?file=playlist.m3u8"

  },
  {
    id: 9,
    image1: AbcNews,
    title: 'CNN News',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/cnnappz.php?file=playlist.m3u8\t"

  },
  {
    id: 10,
    image1: AbcNews,
    title: 'FOX Business',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/foxbusz.php?file=index.m3u8"
    

  },
  {
    id: 11,
    image1: AbcNews,
    title: 'Fox News',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/foxyapp.php?file=playlist.m3u8"   

  },

  {
    id: 12,
    image1: AbcNews,
    title: 'HLN',
    videoUrl:"https://turnerlive.warnermediacdn.com/hls/live/586496/cnngo/hln/VIDEO_0_3564000.m3u8"   

  },

  {
    id: 13,
    image1: AbcNews,
    title: 'MSNBC',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/msnbcz.php?file=playlist.m3u8"   

  },

  {
    id: 14,
    image1: AbcNews,
    title: 'One America',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/oanapp.php?file=playlist.m3u8"   

  },

  {
    id: 15,
    image1: AbcNews,
    title: 'The Weather',
    videoUrl:"https://www.watchnews.pro/wp-content/streamings/weather.php?file=index.m3u8"   

  },

  {
    id: 16,
    image1: AbcNews,
    title: 'Weather Nation',
    videoUrl:"https://live-news-manifest.tubi.video/live-news-manifest/csm/extlive/tubiprd01,Cloudfront-Weather-Nation.m3u8"   

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
