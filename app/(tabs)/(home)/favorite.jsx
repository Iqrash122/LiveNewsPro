// screens/Favorite.js
import { EvilIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Grid from "../../../assets/Icons/grid.svg";
import List from "../../../assets/Icons/list.svg";
import GridView from "../../../components/GirdView";
import ListView from "../../../components/ListView";

const Favorite = () => {
  //   const { id, title, image } = useLocalSearchParams || {};
  //   console.log({ id, title, image });

  // const route = useRoute();
  const [selectedItems, setSelectedItems] = useState([]);

  const route = useRoute(); // Get route object
  const { id, title, image } = route.params || {}; // Access parameters
  console.log("Route Parameters:", { id, title, image });

  const [searchText, setSearchText] = useState("");
  const inset = useSafeAreaInsets();
  const [viewMode, setViewMode] = useState("list");
  const [filteredHomeContent, setFilteredHomeContent] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);

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

  const inputHandler = (text) => {
    const lowerCase = text.toLowerCase();
    setSearchText(lowerCase);
    const filtered = selectedItems.filter((channel) =>
      channel.title.toLowerCase().includes(lowerCase)
    );
    setFilteredHomeContent(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: inset.top,
          paddingLeft: inset.left,
          paddingRight: inset.right,
          paddingBottom: inset.bottom,
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.headerStyle}>
          <View>
            <Text
              style={{ fontSize: 26, color: "#ffb251", fontWeight: "bold" }}
            >
              Favorites
            </Text>
            <Text style={{ fontSize: 10, color: "black", width: 163 }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et?{" "}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              rowGap: 5,
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  setViewMode("list");
                }}
                style={[
                  styles.iconButton,
                  viewMode === "list" && styles.activeIconButton,
                ]}
              >
                <List />
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  setViewMode("grid");
                }}
                style={[
                  styles.iconButton,
                  viewMode === "grid" && styles.activeIconButton,
                ]}
              >
                <Grid />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.defaultContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "#3628B7",
              borderRadius: 5,
            }}
          >
            <TextInput
              value={searchText}
              style={{ width: "85%", marginLeft: 10, padding: 3, flex: 1 }}
              placeholder="search channels"
              placeholderTextColor={"#3628B773"}
              onChangeText={inputHandler}
            />
            <EvilIcons
              name="search"
              size={24}
              color="#3628B7"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {viewMode === "grid" ? (
            <GridView
              data={
                filteredHomeContent.length > 0
                  ? filteredHomeContent
                  : selectedItems
              }
              viewMode={viewMode}
            />
          ) : (
            <ListView
              data={
                filteredHomeContent.length > 0
                  ? filteredHomeContent
                  : selectedItems
              }
              viewMode={viewMode}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
  defaultContainer: {
    padding: 16,
  },
});
