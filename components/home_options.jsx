// // // import { FontAwesome } from "@expo/vector-icons";
// // // import { useNavigation } from '@react-navigation/native';


// // // import {
// // //   Image,
// // //   Pressable,
// // //   SafeAreaView,
// // //   StyleSheet,
// // //   Text,
// // //   View,
// // // } from "react-native";

// // // export default function home_options({ data, viewMode }) {
// // //   const navigation = useNavigation();

// // //   const handlePress = () => {
// // //     navigation.navigate('(video)' , { title: data.title });
// // //   };
// // //   return (
// // //     <SafeAreaView>
// // //       <Pressable onPress={handlePress}>
// // //         <View
// // //           style={
// // //             viewMode === "grid" ? styles.gridItemContainer : styles.container
// // //           }
// // //         >
// // //           <View style={{ display: "flex", justifyContent: "center" }}>
// // //             <Image
// // //               source={data.image1}
// // //               style={viewMode === "grid" ? styles.gridImage : styles.listImage}
// // //             />
// // //           </View>
// // //           {viewMode === "list" && (
// // //             <View style={styles.listDetails}>
// // //               <View style={{ display: "flex", justifyContent: "center" }}>
// // //                 <Text style={styles.title}>{data.title}</Text>
// // //               </View>
// // //               <View
// // //                 style={{
// // //                   display: "flex",
// // //                   justifyContent: "center",
// // //                   marginRight: 8,
// // //                 }}
// // //               >
// // //                 <FontAwesome name="play" size={24} color="#1731B4" />
// // //               </View>
// // //             </View>
// // //           )}
// // //         </View>
// // //       </Pressable>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         display: "flex",
// // //         flexDirection: "row",
// // //         columnGap: 9,
// // //         marginHorizontal: 10,
// // //         padding: 2
// // //       },
// // //       gridItemContainer: {
// // //         margin: 8,
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         display:'flex',
// // //         flexDirection:'column'
// // //       },
// // //       listDetails: {
// // //         display: "flex",
// // //         flexDirection: "row",
// // //         backgroundColor: "white",
// // //         borderRadius: 5,
// // //         width: "82%",
// // //         marginLeft: 5,
// // //         justifyContent: "space-between",
// // //         shadowColor: "black",
// // //         elevation: 2,
// // //         shadowOffset: 0.4,
// // //         borderWidth: 2,
// // //         borderColor: "white",
// // //         padding: 12
// // //       },
// // //       gridImage: {
// // //         width: 100, // Adjust the size as needed
// // //         height: 100, // Adjust the size as needed
// // //       },
// // //       listImage: {
// // //       },
// // //       title: {
// // //         fontSize: 12,
// // //         marginLeft: 5,
// // //         fontWeight: '500',
// // //       },
// // // });



// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {
//   Image,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// export default function HomeOptions({ data, viewMode }) {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     console.log('Navigating to (video) with title:', data.title); 
    
//     navigation.navigate('(video)', { title: data.title });
//   };

//   console.log('HomeOptions data:', data);

//   if (!data) {
//     return null;
//   }

//   return (
//     <SafeAreaView>
//       <Pressable onPress={() => navigation.navigate('(video)', { title: 'My Video', id: 1 })}>
//         <View
//           style={
//             viewMode === "grid" ? styles.gridItemContainer : styles.container
//           }
//         >
//           <View style={{ display: "flex", justifyContent: "center" }}>
//             <Image
//               source={data.image1}
//               style={viewMode === "grid" ? styles.gridImage : styles.listImage}
//             />
//           </View>
//           {viewMode === "list" && (
//             <View style={styles.listDetails}>
//               <View style={{ display: "flex", justifyContent: "center" }}>
//                 <Text style={styles.title}>{data.title}</Text>
//               </View>
//               <View
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   marginRight: 8,
//                 }}
//               >
//                 <FontAwesome name="play" size={24} color="#1731B4" />
//               </View>
//             </View>
//           )}
//         </View>
//       </Pressable>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     columnGap: 9,
//     marginHorizontal: 10,
//     padding: 2
//   },
//   gridItemContainer: {
//     margin: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   listDetails: {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "white",
//     borderRadius: 5,
//     width: "82%",
//     marginLeft: 5,
//     justifyContent: "space-between",
//     shadowColor: "black",
//     elevation: 2,
//     shadowOffset: 0.4,
//     borderWidth: 2,
//     borderColor: "white",
//     padding: 12
//   },
//   gridImage: {
//     width: 100,
//     height: 100,
//   },
//   listImage: {},
//   title: {
//     fontSize: 12,
//     marginLeft: 5,
//     fontWeight: '500',
//   },
// });






import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
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

  // const handlePress = () => {
  //   console.log('Navigating to (video) with title:', data.title); 
  //   navigation.navigate('(video)', { title: data.title, id: data.id });
  // };

  // if (!data) {
  //   return null;
  // }

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('(video)', { title: data.title })}  >
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
    padding: 2
  },
  gridItemContainer: {
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    display:'flex',
    flexDirection:'column'
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
    padding: 12
  },
  gridImage: {
    width: 100,
    height: 100,
  },
  listImage: {},
  title: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '500',
  },
});
