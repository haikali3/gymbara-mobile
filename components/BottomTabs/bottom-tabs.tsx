// components/BottomTabs/bottom-tabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "~/app/(tabs)/index"; // or wherever your index.tsx is
import { View, Text } from "react-native";
import { Home, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();

function DummyProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Profile</Text>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? "#0ea5e9" : "#a1a1aa";
          switch (route.name) {
            case "Home":
              return <Home color={iconColor} size={24} />;
            case "Profile":
              return <User color={iconColor} size={24} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Screen} />
      <Tab.Screen name="Profile" component={DummyProfileScreen} />
      {/* <Tab.Screen name="Workout" component={WorkoutScreen} /> */}
    </Tab.Navigator>
  );
}
