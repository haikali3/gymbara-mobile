import { Info } from "lucide-react-native";
import { View, Text, Animated, Button } from "react-native";
import {
  LayoutAnimationConfig,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-secondary/30">
      <Text className="text-foreground text-xl font-bold">Tab Two Screen</Text>
      <Text className="text-muted-foreground text-xl font-bold">
        Tab Two Screen
      </Text>
    </View>
  );
}
