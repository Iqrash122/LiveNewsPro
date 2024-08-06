// import AntDesign from "@expo/vector-icons/AntDesign";
// import Feather from "@expo/vector-icons/Feather";
// import { useNavigation } from "@react-navigation/native";
// import { Link } from "expo-router";
// import React, { useState } from "react";
// import {
//   ImageBackground,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function Login() {
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const navigation = useNavigation();

//   const backgroundImage = require("../../assets/Icons/backGround.png");

//   const handleHomeScreen = () => {
//     navigation.navigate("/(home)");
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };
//   return (
//     <ImageBackground
//       source={backgroundImage}
//       style={{ flex: 1, resizeMode: "cover" }}
//     >
//       <SafeAreaView style={{ flex: 1, }}>
//         <View>
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               marginTop: 108,
//               marginLeft: 33,
//             }}
//           >
//             <Text style={{ color: "#0A0E7D", fontSize: 40, fontWeight: 300 }}>
//               Welcome
//             </Text>
//             <Text style={{ color: "#0A0E7D", fontSize: 40, fontWeight: 900 }}>
//               Back
//             </Text>
//           </View>

//           <View
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 50,
//             }}
//           >
//             <Text style={{ color: "#0A0E7D", fontSize: 36, fontWeight: 700 }}>
//               Login
//             </Text>
//           </View>

//           <View
//             style={{ display: "flex", flexDirection: "column", marginTop: 56 }}
//           >
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>
//             <View style={styles.inputContainers}>
//               <TextInput
//                 style={styles.inputs}
//                 placeholder="Password"
//                 secureTextEntry={!isPasswordVisible}
//                 value={password}
//                 onChangeText={setPassword}
//               />
//               <TouchableOpacity
//                 style={styles.iconContainer}
//                 onPress={togglePasswordVisibility}
//               >
//                 {isPasswordVisible ? (
//                   <Feather name="eye-off" size={24} color="black" />
//                 ) : (
//                   <AntDesign name="eyeo" size={24} color="black" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 alignItems: "flex-end",
//                 marginRight: 30,
//                 marginTop: 5,
//               }}
//             >
//               <TouchableOpacity>
//                 <Text
//                   style={{ color: "#9F9F9F", fontSize: 12, fontWeight: 400 }}
//                 >
//                   {" "}
//                   forgot Password?
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 70,
//               backgroundColor: "#0A0E7D",
//               marginHorizontal: 70,
//               borderRadius: 25,
//             }}
//           >
//             <TouchableOpacity>
//               <Link href={"/(home)"} style={{ padding: 8 }}>
//                 <Text style={{ color: "white", fontSize: 20, padding: 8 }}>
//                   Login
//                 </Text>
//               </Link>
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               marginTop: 10,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Text style={{ color: "#9F9F9F", fontSize: 12 }}>
//               Don't have an account?
//             </Text>
//             <Link href={"/(signup)"}>
//               <Text style={{ color: "#0A0E7D" }}>SignUp</Text>
//             </Link>
//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 45,
//     borderColor: "#0A0E7D", // Add your desired border color
//     borderWidth: 1, // Add your desired border width
//     borderRadius: 5, // Add border radius if needed
//     paddingHorizontal: 10,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },
//   inputContainer: {
//     width: "100%",
//     paddingHorizontal: 30,
//     marginVertical: 10,
//   },
//   inputContainers: {
//     flexDirection: "row",
//     alignItems: "center",
//     // paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "#0A0E7D", // Customize your border color
//     borderRadius: 5,
//     borderWidth: 1, // Add your desired border width
//     borderRadius: 5, // Add border radius if needed
//     marginHorizontal: 30,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },
//   inputs: {
//     flex: 1,
//     height: 40,
//     paddingHorizontal: 10,
//   },
//   iconContainer: {
//     padding: 10,
//   },
// });




import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const backgroundImage = require("../../assets/Icons/backGround.png");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    let valid = true;
    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        const response = await fetch("https://livenewspro.com/wp-json/custom-plugin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Handle successful login
          navigation.navigate("/(home)");
        } else {
          // Handle login error
          Alert.alert("Login Failed", data.message || "Please try again");
        }
      } catch (error) {
        Alert.alert("Login Failed", "An error occurred. Please try again.");
      }
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
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
                placeholder="Username"
                autoCapitalize="none"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            </View>
            <View style={styles.inputContainers}>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
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
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
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
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{ color: "white", fontSize: 20, padding: 8 }}>
                Login
              </Text>
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
    borderWidth: 1,
    borderColor: "#0A0E7D", // Customize your border color
    borderRadius: 5,
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 30,
  },
});
