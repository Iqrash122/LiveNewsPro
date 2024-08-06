

import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="VideoScreen" />
      <Stack.Screen name="favorite" />
      <Stack.Screen name="profile" />



    </Stack>
  );
}

export default HomeLayout;




// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Dummy screen components
// const HomeScreen = () => <div>Home Screen</div>;
// const VideoScreen = () => <div>Video Screen</div>;
// const FavoriteScreen = () => <div>Favorite Screen</div>;
// const ProfileScreen = () => <div>Profile Screen</div>;

// const HomeTabs = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = focused ? 'home' : 'home-outline';
//         } else if (route.name === 'Video') {
//           iconName = focused ? 'videocam' : 'videocam-outline';
//         } else if (route.name === 'Favorite') {
//           iconName = focused ? 'heart' : 'heart-outline';
//         } else if (route.name === 'Profile') {
//           iconName = focused ? 'person' : 'person-outline';
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     }}
//   >
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Video" component={VideoScreen} />
//     <Tab.Screen name="Favorite" component={FavoriteScreen} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// );

// const HomeLayout = () => (
//   <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeTabs" component={HomeTabs} />
//       <Stack.Screen name="VideoScreen" component={VideoScreen} />
//       <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
//       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default HomeLayout;
