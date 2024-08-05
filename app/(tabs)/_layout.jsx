import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";

const TabsLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    
      <>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: "#051643",
            tabBarActiveTintColor: "#ffb251",
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: "#fff",
              elevation: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              borderWidth: 0,
            },
          }}
        >
          <Tabs.Screen
            name="(home)"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="home" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="(favourite)"
            options={{
              title: "Favourite",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="heart" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="(profile)"
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </>
    
  );
};
export default TabsLayout;
