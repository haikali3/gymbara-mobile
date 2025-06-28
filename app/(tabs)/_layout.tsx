import { Tabs } from "expo-router";
import { Home, User } from "lucide-react-native";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
        headerRight: () => <ThemeToggle />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? "#0ea5e9" : "#a1a1aa"} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab-two"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <User color={focused ? "#0ea5e9" : "#a1a1aa"} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
