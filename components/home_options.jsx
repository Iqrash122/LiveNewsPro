

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function HomeOptions({ data, viewMode }) {
  const navigation = useNavigation();
  const [channels, setChannels] = useState([]);


  const handlePress = () => {
    console.log("Navigating to video with title:", data.title, data.id, data.image1);
    navigation.navigate("VideoScreen", { title: data.title, id: data.id, image:data.image1 });
  };


  

  useEffect(() => {
    fetch('https://www.watchnews.pro/wp-content/streamings/cbcapp.php?file=index.m3u8')
      .then(response => response.json())
      .then(data => setChannels(data))
      .catch(error => console.error("cheeeen dama dam dam"));
  }, []);

  return (
    <SafeAreaView>
      <Pressable  onPress={handlePress} >
        <View
          style={
            viewMode === "grid" ? styles.gridItemContainer : styles.container
          }
        >
          <View style={{ display: "flex", justifyContent: "center" }}>
            <Image
              source={data.image1}
              style={viewMode === "grid" ? styles.gridImage : styles.listImage}
            />
          </View>
          {viewMode === "list" && (
            <View style={styles.listDetails}>
              <View style={{ display: "flex", justifyContent: "center" }}>
                <Text style={styles.title}>{data.title}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: 8,
                }}
              >
                <FontAwesome name="play" size={24} color="#1731B4" />
              </View>
            </View>
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: 9,
    marginHorizontal: 10,
    padding: 2,
  },
  gridItemContainer: {
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  listDetails: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    width: "82%",
    marginLeft: 5,
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 2,
    shadowOffset: 0.4,
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
  gridImage: {
    width: 100,
    height: 100,
  },
  listImage: {},
  title: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: "500",
  },
});
