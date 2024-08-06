import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Grid from "../../../assets/Icons/grid.svg";
import List from "../../../assets/Icons/list.svg";
import AbcNews from "../../../assets/images/abcNews.png";
import GridView from "../../../components/GirdView";
import ListView from "../../../components/ListView";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const homeContent = [
  {
    id: 1,
    image1: AbcNews,
    title: "ABC News",
  },
  {
    id: 2,
    image1: AbcNews,
    title: "ABC News",
  },
  {
    id: 3,
    image1: AbcNews,
    title: "ABC News",
  },
  {
    id: 4,
    image1: AbcNews,
    title: "ABC News",
  },
  {
    id: 5,
    image1: AbcNews,
    title: "ABC News",
  },
];

function VideoScreen() {
  const [viewMode, setViewMode] = useState("list");
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [filteredHomeContent, setFilteredHomeContent] = useState(homeContent);
  const [searchText, setSearchText] = useState("");
  const [favoriteChannels, setFavoriteChannels] = useState([]);
  const insets = useSafeAreaInsets();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();

  // const { videoUrl } = route.params;
  const { id, title, image, videoUrl } = useLocalSearchParams();
  console.log({ id, title, image, videoUrl });

  useEffect(() => {
    const loadSelectedItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("selectedItems");
        if (storedItems) {
          setSelectedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Failed to load selected items from storage:", error);
      }
    };

    loadSelectedItems();
  }, []);

  useEffect(() => {
    const storeSelectedItems = async () => {
      try {
        await AsyncStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      } catch (error) {
        console.error("Failed to store selected items:", error);
      }
    };

    storeSelectedItems();
  }, [selectedItems]);

  const toggleHeart = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);
    const updatedSelectedItems = isSelected
      ? selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);

    if (!isSelected) {
      navigation.navigate("favorite", { id: item.id, title: item.title, image: item.image, videoUrl });
    }
  };;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableWithoutFeedback>
          <View style={{ height: 225, marginTop: 40 }}>
            <Video
              style={ styles.video}
              source={{ uri: videoUrl }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay
            />
            <Text style={styles.overlayText}>Live</Text>
            <Link href={"/(home)"} style={styles.overlayTexts}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color="white"
              />
            </Link>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <View style={{display:"flex", flexDirection:'column', }} > 
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: "#3628B7" }}
              >
                {" "}
                {title}{" "}
              </Text>
              <Text
                style={{ fontSize: 10, color: "#A4A4A4", fontWeight: "400", marginLeft:4 }}
              >
                USA
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => toggleHeart({ id, title, image })}
            >
              <AntDesign
                name={
                  selectedItems.some((selectedItem) => selectedItem.id === id)
                    ? "heart"
                    : "hearto"
                }
                size={24}
                color="#3628B7"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerStyle}>
          <View>
            <Text
              style={{ fontSize: 18, color: "#3628B7", fontWeight: "bold" }}
            >
              Related Channel
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => setViewMode("list")}
              style={[
                styles.iconButton,
                viewMode === "list" && styles.activeIconButton,
              ]}
            >
              <List />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setViewMode("grid")}
              style={[
                styles.iconButton,
                viewMode === "grid" && styles.activeIconButton,
              ]}
            >
              <Grid />
            </TouchableOpacity>
          </View>
        </View>
        
            
        <View style={styles.flatList}>
          {viewMode === "grid" ? (
            <GridView data={filteredHomeContent} viewMode={viewMode} />
          ) : (
            <ListView data={filteredHomeContent} viewMode={viewMode} />
          )}
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: "100%",
    width: "100%",
  },
  overlayText: {
    position: "absolute",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    marginTop: 172,
    marginLeft: 31,
  },
  overlayTexts: {
    position: "absolute",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 31,
  },
  infoContainer: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: 63,
    display: "flex",
    borderRadius: 8,
    justifyContent: "center",
  },
  infoContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 13,
  },
  headerStyle: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 5,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginLeft: 5,
  },
  activeIconButton: {
    backgroundColor: "#3628B7",
  },
  flatList: {
    height: "100%",
  },
});
