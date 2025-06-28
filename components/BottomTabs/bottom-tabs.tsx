// components/BottomTabs/bottom-tabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "~/app/(tabs)/index"; // or wherever your index.tsx is
import { View, Text } from "react-native";
import { Atom, Home, User } from "lucide-react-native";
import { Button } from "../ui/button";
import { Link, Tabs } from "expo-router";
import TabTwoScreen from "~/app/(tabs)/tab-two";
import { ThemeToggle } from "~/components/ThemeToggle";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
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
      <Tab.Screen
        name="Home"
        component={Screen}
        options={{ title: "Home", headerRight: () => <ThemeToggle /> }}
      />
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Atom color={color as any} />,
          headerRight: () => (
            // <Link href="/modal" asChild>
            <Link href="/" asChild>
              <Button>Hello!</Button>
            </Link>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{ title: "Profile", headerRight: () => <ThemeToggle /> }}
      />
      {/* <Tab.Screen name="Workout" component={WorkoutScreen} /> */}
    </Tab.Navigator>
  );
}
