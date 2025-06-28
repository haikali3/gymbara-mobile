import { Tabs } from "expo-router";
import { Home, User } from "lucide-react-native";
import { useTheme } from "@react-navigation/native";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: colors.card,
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
            <Home color={focused ? colors.primary : colors.text} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab-two"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <User color={focused ? colors.primary : colors.text} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
