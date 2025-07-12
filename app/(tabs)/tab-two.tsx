import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function TabTwoScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-secondary/30">
			<Text className="text-foreground text-xl font-bold">Tab Two Screen</Text>
			<Text className="text-muted-foreground text-xl font-bold">
				Tab Two Screen
			</Text>
			<Text className="">Normal</Text>
		</View>
	);
}
