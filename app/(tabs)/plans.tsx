import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { ChevronRight, Clock } from "lucide-react-native";
import { Pressable, ScrollView, View } from "react-native";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function WorkoutPlansScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView className="flex-1 bg-secondary/30 ">
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
							<Pressable
								onPress={() => router.push("/workout/day1")}
								className="flex-row items-center space-x-3 active:opacity-75"
							>
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										1
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Mixed Push/Legs Focus
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										8 exercises • 45-60 min
									</Text>
								</View>
								<ChevronRight size={16} color="rgba(255,255,255,0.7)" />
							</Pressable>

							<Pressable
								onPress={() => router.push("/workout/day2")}
								className="flex-row items-center space-x-3 active:opacity-75"
							>
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										2
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Pull/Push Upper Focus
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										7 exercises • 40-55 min
									</Text>
								</View>
								<ChevronRight size={16} color="rgba(255,255,255,0.7)" />
							</Pressable>

							<Pressable
								onPress={() => router.push("/workout/day3")}
								className="flex-row items-center space-x-3 active:opacity-75"
							>
								<View className="w-8 h-8 rounded-full bg-primary-foreground/20 items-center justify-center">
									<Text className="text-primary-foreground font-semibold">
										3
									</Text>
								</View>
								<View className="flex-1 pl-4">
									<Text className="text-primary-foreground font-medium">
										Legs Focus
									</Text>
									<Text className="text-primary-foreground/80 text-sm">
										5 exercises • 30-45 min
									</Text>
								</View>
								<ChevronRight size={16} color="rgba(255,255,255,0.7)" />
							</Pressable>
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
