import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const backgroundImage = require("../../assets/Icons/backGround.png");

  const handleHomeScreen = () => {
    navigation.navigate("/(home)");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <SafeAreaView style={{ flex: 1, }}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 108,
              marginLeft: 33,
            }}
          >
            <Text style={{ color: "#0A0E7D", fontSize: 40, fontWeight: 300 }}>
              Welcome
            </Text>
            <Text style={{ color: "#0A0E7D", fontSize: 40, fontWeight: 900 }}>
              Back
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text style={{ color: "#0A0E7D", fontSize: 36, fontWeight: 700 }}>
              Login
            </Text>
          </View>

          <View
            style={{ display: "flex", flexDirection: "column", marginTop: 56 }}
          >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainers}>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <Feather name="eye-off" size={24} color="black" />
                ) : (
                  <AntDesign name="eyeo" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginRight: 30,
                marginTop: 5,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "#9F9F9F", fontSize: 12, fontWeight: 400 }}
                >
                  {" "}
                  forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 70,
              backgroundColor: "#0A0E7D",
              marginHorizontal: 70,
              borderRadius: 25,
            }}
          >
            <TouchableOpacity>
              <Link href={"/(home)"} style={{ padding: 8 }}>
                <Text style={{ color: "white", fontSize: 20, padding: 8 }}>
                  Login
                </Text>
              </Link>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#9F9F9F", fontSize: 12 }}>
              Don't have an account?
            </Text>
            <Link href={"/(signup)"}>
              <Text style={{ color: "#0A0E7D" }}>SignUp</Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: "#0A0E7D", // Add your desired border color
    borderWidth: 1, // Add your desired border width
    borderRadius: 5, // Add border radius if needed
    paddingHorizontal: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  inputContainers: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#0A0E7D", // Customize your border color
    borderRadius: 5,
    borderWidth: 1, // Add your desired border width
    borderRadius: 5, // Add border radius if needed
    marginHorizontal: 30,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  inputs: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
