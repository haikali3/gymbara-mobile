import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { Calendar, Clock, Play, Target, Trophy } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function WorkoutScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView className="flex-1 bg-secondary/30">
			<View className="px-6 py-3">
				{/* Welcome Header */}
				<View className="pt-2 mb-4">
					<Text className="text-3xl font-bold text-foreground">
						Ready to Train?
					</Text>
					<Text className="text-lg text-muted-foreground">
						Let's crush today's workout together
					</Text>
				</View>

				{/* Stats Section */}
				<View className="mb-4">
					<Text className="text-xl font-semibold text-foreground mb-2">
						Your Progress
					</Text>

					<View className="flex-row justify-between gap-3">
						<Card className="flex-1 bg-card border-border shadow-sm">
							<CardContent className="items-center py-6 px-4">
								<View className="w-14 h-14 rounded-full bg-primary/10 items-center justify-center mb-4">
									<Target size={28} color={colors.primary} />
								</View>
								<View className="items-center">
									<Text className="text-2xl font-bold text-foreground mb-1">
										7
									</Text>
									<Text className="text-sm text-muted-foreground text-center">
										Day Streak
									</Text>
								</View>
							</CardContent>
						</Card>

						<Card className="flex-1 bg-card border-border shadow-sm">
							<CardContent className="items-center py-6 px-4">
								<View className="w-14 h-14 rounded-full bg-primary/10 items-center justify-center mb-4">
									<Clock size={28} color={colors.primary} />
								</View>
								<View className="items-center">
									<Text className="text-2xl font-bold text-foreground mb-1">
										45
									</Text>
									<Text className="text-sm text-muted-foreground text-center">
										Min Total
									</Text>
								</View>
							</CardContent>
						</Card>

						<Card className="flex-1 bg-card border-border shadow-sm">
							<CardContent className="items-center py-6 px-4">
								<View className="w-14 h-14 rounded-full bg-primary/10 items-center justify-center mb-4">
									<Trophy size={28} color={colors.primary} />
								</View>
								<View className="items-center">
									<Text className="text-2xl font-bold text-foreground mb-1">
										12
									</Text>
									<Text className="text-sm text-muted-foreground text-center">
										Workouts
									</Text>
								</View>
							</CardContent>
						</Card>
					</View>
				</View>

				{/* Quick Start Section */}
				<View className="mb-8">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Today's Plan
					</Text>

					<Card className="bg-primary shadow-lg">
						<CardContent className="p-6">
							<View className="flex-row items-center justify-between">
								<View className="flex-1 pr-4">
									<View className="flex-row items-center mb-3">
										<Calendar
											size={18}
											className="text-primary-foreground mr-2"
										/>
										<Text className="text-sm text-primary-foreground/80">
											March 15, 2024
										</Text>
									</View>
									<Text className="text-2xl font-bold text-primary-foreground mb-3">
										Upper Body Strength
									</Text>
									<Text className="text-base text-primary-foreground/80">
										6 exercises • 30-45 min
									</Text>
								</View>
								<Button
									size="lg"
									className="bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full w-16 h-16 items-center justify-center"
									onPress={() => router.push("/(tabs)/plans")}
								>
									<Play
										size={28}
										className="text-primary-foreground ml-1"
										color={colors.primary}
									/>
								</Button>
							</View>
						</CardContent>
					</Card>
				</View>

				{/* Quick Actions */}
				<View className="mb-8">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Quick Actions
					</Text>

					<View className="flex-row gap-4">
						<Button
							variant="outline"
							className="flex-1 py-4"
							onPress={() => router.push("/(tabs)/plans")}
						>
							<Text className="text-foreground text-base font-medium">
								Browse Plans
							</Text>
						</Button>
						<Button variant="outline" className="flex-1 py-4">
							<Text className="text-foreground text-base font-medium">
								Free Workout
							</Text>
						</Button>
					</View>
				</View>

				{/* Recent Activity Section */}
				<View className="mb-8">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Recent Activity
					</Text>

					<Card className="bg-card border-border">
						<CardContent className="p-6">
							<View className="flex-row items-start mb-6">
								<View className="w-4 h-4 rounded-full bg-primary mt-1 mr-4" />
								<View className="flex-1">
									<Text className="text-base font-semibold text-foreground mb-2">
										Upper Body Workout
									</Text>
									<Text className="text-sm text-muted-foreground">
										2 hours ago • 35 minutes • 6 exercises completed
									</Text>
								</View>
							</View>

							<View className="flex-row items-start mb-6">
								<View className="w-4 h-4 rounded-full bg-muted mt-1 mr-4" />
								<View className="flex-1">
									<Text className="text-base font-semibold text-foreground mb-2">
										Lower Body Strength
									</Text>
									<Text className="text-sm text-muted-foreground">
										Yesterday • 40 minutes • 8 exercises completed
									</Text>
								</View>
							</View>

							<View className="flex-row items-start">
								<View className="w-4 h-4 rounded-full bg-muted mt-1 mr-4" />
								<View className="flex-1">
									<Text className="text-base font-semibold text-foreground mb-2">
										Cardio Session
									</Text>
									<Text className="text-sm text-muted-foreground">
										2 days ago • 25 minutes • HIIT workout
									</Text>
								</View>
							</View>
						</CardContent>
					</Card>
				</View>

				{/* Bottom Spacing */}
				<View className="h-4" />
			</View>
		</ScrollView>
	);
}
