import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useTheme } from '../app/ThemeContext';




const ProfileModal = ({
  visible,
  onClose,
  image,
  name,
  email,
  date,
  onImageChange,
  onNameChange,
  onEmailChange,
  onDateChange,
}) => {
    const { colors } = useTheme();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      onImageChange(uri);
      try {
        await AsyncStorage.setItem("userImage", uri);
      } catch (error) {
        console.error("Failed to save image:", error);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.modalContainer, ]}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'space-between',
                }}
              >
                <View style={{justifyContent:"center", alignItems:"center", marginLeft:50}}>
                  <Text>Edit your profile here...</Text>
                </View>

                <View
                  style={{
                    justifyContent: "flex-end",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <TouchableOpacity onPress={onClose}>
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
                    onChangeText={onNameChange}
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
                    onChangeText={onEmailChange}
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
                    onChangeText={onDateChange}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

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

export default ProfileModal;
