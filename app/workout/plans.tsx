import { useTheme } from "@react-navigation/native";
import { ChevronRight, Clock } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function WorkoutPlansScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView className="flex-1 bg-background/30">
			<View className="px-6 py-3">
				<View className="pt-2 mb-4">
					<Text className="text-3xl font-bold text-foreground">
						Workout Plans
					</Text>
					<Text className="text-lg text-muted-foreground">
						Choose your fitness journey
					</Text>
				</View>
				{/* 3-Day Split Plan */}
				<Card className="bg-primary shadow-lg">
					<CardContent className="p-6">
						<View className="flex-row items-center justify-between">
							<View className="flex-1">
								<Text className="text-2xl font-bold text-primary-foreground mb-3">
									3-Day Split
								</Text>
								<Text className="text-base text-primary-foreground/80">
									Upper / Lower / Full Body
								</Text>
							</View>
							<ChevronRight size={24} color={colors.primary} />
						</View>

						<View className="flex-row items-center mb-3 pt-2">
							<Clock
								size={18}
								className="text-primary-foreground/80 mr-2"
								color={colors.primary}
							/>
							<Text className="text-sm text-primary-foreground/80 pl-1">
								45 min • 3 days/week • Beginner
							</Text>
						</View>

						{/* Workout Days */}
						<View className="space-y-3 mt-4">
							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										1
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Upper Body
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										Push + Pull
									</Text>
								</View>
							</View>

							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										2
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Lower Body
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										Legs + Glutes
									</Text>
								</View>
							</View>

							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										3
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Full Body
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										Complete Workout
									</Text>
								</View>
							</View>
						</View>
					</CardContent>
				</Card>
				{/* 2-Day Split Plan */}
				<Card className="bg-orange-100 border-orange-200 shadow-sm mt-4">
					<CardContent className="p-6">
						<View className="flex-row items-center justify-between">
							<View className="flex-1 pr-4">
								<Text className="text-2xl font-bold text-orange-900 mb-3">
									2-Day Split
								</Text>
								<Text className="text-base text-orange-700">
									Full Body Focus • 2 days/week • Intermediate
								</Text>
							</View>
							<ChevronRight size={24} className="text-orange-600" />
						</View>
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
}
