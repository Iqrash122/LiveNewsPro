import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import ProfileModal from "../../../components/ProfileModal";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from "react-native";
import Duration from "../../../assets/Icons/duration.svg";
import ExpireDate from "../../../assets/Icons/expireDate.svg";
import MemberShip from "../../../assets/Icons/membership.svg";
import Price from "../../../assets/Icons/price.svg";
// import ProfileImage from '../../../assets/Icons/profileImage.svg';

import * as ImagePicker from "expo-image-picker";
import { useTheme } from "../../../app/ThemeContext";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const systemColorScheme = useColorScheme();
  const [name, setName] = useState("Iqrash ahmad");
  const [email, setEmail] = useState("iqrashahamd218@gmail.com");
  const [date, setDate] = useState("2022-05-01");
  // const [image, setImage] = useState('https://example.com/profile.jpg');
  const { colors, isDarkMode, toggleTheme } = useTheme();

  const colorScheme = isEnabled ? "dark" : systemColorScheme;

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    // Load the saved image URI when the app starts
    const loadImage = async () => {
      try {
        const savedImage = await AsyncStorage.getItem("userImage");
        if (savedImage) {
          setImage(savedImage);
        }
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    };

    loadImage();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      try {
        await AsyncStorage.setItem("userImage", uri);
      } catch (error) {
        console.error("Failed to save image:", error);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <View style={styles.card}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link href={"/(home)"}>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color="#3628B7"
                  />
                </Link>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text
                    style={{ fontSize: 10, color: "#3628B7", fontWeight: 400 }}
                  >
                    Edit Profile
                  </Text>
                </TouchableOpacity>
                {/* <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                  >
                    <View style={styles.modalContainer}>
                      <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                          <View style={{display:"flex", flexDirection:'row', justifyContent:'space-evenly'}}>
                            <View>
                              <Text>Edit your profile here...</Text>
                            </View>

                            <View
                              style={{
                                justifyContent: "flex-end",
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                              >
                                <Text
                                  style={{
                                    fontSize: 14,
                                    color: "blue",
                                    justifyContent: "flex-end",
                                    display: "flex",
                                    alignItems: "flex-end",
                                  }}
                                >
                                  Close
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>

                          <View
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 10,
                              marginTop: 10,
                            }}
                          >
                            <View
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <TouchableOpacity onPress={pickImage}>
                                <View
                                  style={{
                                    width: 106,
                                    height: 102,
                                    borderRadius: 10,
                                    backgroundColor: "#3628B71A",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {image && (
                                    <Image
                                      source={{ uri: image }}
                                      style={styles.profileImage}
                                    />
                                  )}
                                </View>
                              </TouchableOpacity>
                            </View>
                            <View
                              style={{
                                backgroundColor: "#EBE9F8",
                                borderRadius: 4,
                                fontSize: 9,
                                justifyContent: "center",
                              }}
                            >
                              <TextInput
                                style={{
                                  fontSize: 12,
                                  textAlignVertical: "center",
                                  marginLeft: 9,
                                }}
                                value={name}
                                onChangeText={setName}
                              />
                            </View>
                            <View
                              style={{
                                backgroundColor: "#EBE9F8",
                                borderRadius: 4,
                                fontSize: 9,
                                justifyContent: "center",
                              }}
                            >
                              <TextInput
                                style={{
                                  fontSize: 11,
                                  textAlignVertical: "center",
                                  marginLeft: 9,
                                }}
                                value={email}
                                onChangeText={setEmail}
                              />
                            </View>
                            <View
                              style={{
                                backgroundColor: "#EBE9F8",
                                borderRadius: 4,
                                fontSize: 9,
                                justifyContent: "center",
                                width: "auto",
                              }}
                            >
                              <TextInput
                                style={{
                                  fontSize: 11,
                                  textAlignVertical: "center",
                                  marginLeft: 9,
                                }}
                                value={date}
                                onChangeText={setDate}
                              />
                            </View>
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal> */}
                <ProfileModal
                  visible={modalVisible}
                  onClose={() => setModalVisible(false)}
                  image={image}
                  name={name}
                  email={email}
                  date={date}
                  onImageChange={setImage}
                  onNameChange={setName}
                  onEmailChange={setEmail}
                  onDateChange={setDate}
                />
              </View>

              <View
                style={{
                  width: 289,
                  height: 102,
                  marginTop: 17,
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 13,
                }}
              >
                <TouchableOpacity onPress={pickImage}>
                  <View
                    style={{
                      width: 106,
                      height: 102,
                      borderRadius: 10,
                      backgroundColor: "#3628B71A",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ display: "flex" }}>
                      {/* <ProfileImage /> */}
                      {image && (
                        <Image
                          source={{ uri: image }}
                          style={{ width: 100, height: 100, borderRadius: 10 }}
                        />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: 170,
                    height: 102,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 13,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 170,
                      height: 25,
                      backgroundColor: "#EBE9F8",
                      borderRadius: 4,
                      fontSize: 9,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        textAlignVertical: "center",
                        marginLeft: 9,
                      }}
                    >
                      {name}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 170,
                      height: 25,
                      backgroundColor: "#EBE9F8",
                      borderRadius: 4,
                      fontSize: 9,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: 400,
                        textAlignVertical: "center",
                        marginLeft: 9,
                      }}
                    >
                      {email}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 170,
                      height: 25,
                      backgroundColor: "#EBE9F8",
                      borderRadius: 4,
                      fontSize: 9,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        textAlignVertical: "center",
                        marginLeft: 9,
                      }}
                    >
                      {date}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 15,
                padding: 8,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                marginTop: 13,
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 14,
                width: 350,
                height: 52,
                display: "flex",
                // marginLeft: 16,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 13,
                  columnGap: 9,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="moon-sharp" size={24} color="#3628B7" />
                <Text
                  style={{
                    color: "#3628B7",
                    fontSize: 16,
                    fontWeight: 500,
                    textAlignVertical: "center",
                    justifyContent: "center",
                  }}
                >
                  Night Mode
                </Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Switch
                  trackColor={{ false: "#767577", true: "#3628B7" }}
                  thumbColor={isDarkMode ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleTheme}
                  value={isDarkMode}
                />
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 15,
                padding: 16,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                width: 350,
                height: 355,
                marginTop: 17,
                display: "flex",
                // marginLeft: 16,
              }}
            >
              <View style={{ marginTop: 10, marginLeft: 22 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 700, color: "#3628B7" }}
                >
                  Package Details
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    width: 289,
                    height: 49,
                    backgroundColor: "#EBE9F8",
                    borderRadius: 8,
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 5,
                    }}
                  >
                    <Text style={{ fontSize: 10, fontWeight: 500 }}>
                      MemberShip Name
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400 }}>
                      WatchNews.Pro - Yearly
                    </Text>
                  </View>

                  <View style={{ display: "flex", justifyContent: "center" }}>
                    <MemberShip />
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    width: 289,
                    height: 49,
                    backgroundColor: "#EBE9F8",
                    borderRadius: 8,
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 5,
                    }}
                  >
                    <Text style={{ fontSize: 10, fontWeight: 500 }}>
                      MemberShip Duration
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400 }}>
                      1 Years
                    </Text>
                  </View>

                  <View style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Image source={MemberShip} width={28} height={20} /> */}
                    <Duration />
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  marginLeft: 15,
                }}
              >
                <View
                  style={{
                    width: 289,
                    height: 49,
                    backgroundColor: "#EBE9F8",
                    borderRadius: 8,
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 5,
                    }}
                  >
                    <Text style={{ fontSize: 10, fontWeight: 500 }}>
                      Membership Price
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400 }}>
                      $ 60.00
                    </Text>
                  </View>

                  <View style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Image source={MemberShip} width={28} height={20} /> */}
                    <Price />
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 17,
                  }}
                >
                  <View
                    style={{
                      width: 289,
                      height: 49,
                      backgroundColor: "#EBE9F8",
                      borderRadius: 8,
                      padding: 10,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 5,
                      }}
                    >
                      <Text style={{ fontSize: 10, fontWeight: 500 }}>
                        Membership Expire Date
                      </Text>
                      <Text style={{ fontSize: 10, fontWeight: 400 }}>
                        10 - July - 2026
                      </Text>
                    </View>

                    <View style={{ display: "flex", justifyContent: "center" }}>
                      {/* <Image  source={MemberShip} width={28} height={20} /> */}
                      <ExpireDate />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                // alignItems: "center",
                marginTop: 23,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 400, color: "#3628B7" }}>
                LogOut
              </Text>
              <TouchableOpacity>
                <Link href={"(login)"}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color="#3628B7"
                  />
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 51,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 177,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "auto",
    marginHorizontal: 50,
    marginVertical: 50,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    // alignItems: "center",
    height: "height",
  },
  modalText: {
    // fontSize: 16,
    marginBottom: 20,
  },
  closeText: {
    fontSize: 14,
    color: "blue",
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "flex-end",
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
  inputs: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
