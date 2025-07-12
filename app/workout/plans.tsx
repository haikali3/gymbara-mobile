import { Calendar, ChevronRight, Clock, Users } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function WorkoutPlansScreen() {
	return (
		<ScrollView className="flex-1 bg-background">
			<View className="p-4 space-y-6">
				{/* Header */}
				<View className="space-y-2">
					<Text className="text-3xl font-bold text-foreground">
						Workout Plans
					</Text>
					<Text className="text-lg text-muted-foreground">
						Choose your fitness journey
					</Text>
				</View>

				{/* 3-Day Split Plan */}
				<Card className="bg-blue-600 p-6 rounded-2xl">
					<CardContent className="space-y-4 p-0">
						<View className="flex-row items-center justify-between">
							<View className="flex-1">
								<Text className="text-2xl font-bold text-white">
									3-Day Split
								</Text>
								<Text className="text-blue-100 text-base">
									Upper / Lower / Full Body
								</Text>
							</View>
							<ChevronRight size={24} className="text-white" />
						</View>

						{/* Plan Details */}
						<View className="flex-row items-center space-x-6">
							<View className="flex-row items-center space-x-2">
								<Clock size={16} className="text-blue-200" />
								<Text className="text-blue-100 text-sm">45 min</Text>
							</View>
							<View className="flex-row items-center space-x-2">
								<Calendar size={16} className="text-blue-200" />
								<Text className="text-blue-100 text-sm">3 days/week</Text>
							</View>
							<View className="flex-row items-center space-x-2">
								<Users size={16} className="text-blue-200" />
								<Text className="text-blue-100 text-sm">Beginner</Text>
							</View>
						</View>

						{/* Workout Days */}
						<View className="space-y-3 mt-4">
							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
									<Text className="text-white font-semibold">1</Text>
								</View>
								<View className="flex-1">
									<Text className="text-white font-medium">Upper Body</Text>
									<Text className="text-blue-200 text-sm">Push + Pull</Text>
								</View>
							</View>

							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
									<Text className="text-white font-semibold">2</Text>
								</View>
								<View className="flex-1">
									<Text className="text-white font-medium">Lower Body</Text>
									<Text className="text-blue-200 text-sm">Legs + Glutes</Text>
								</View>
							</View>

							<View className="flex-row items-center space-x-3">
								<View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
									<Text className="text-white font-semibold">3</Text>
								</View>
								<View className="flex-1">
									<Text className="text-white font-medium">Full Body</Text>
									<Text className="text-blue-200 text-sm">
										Complete Workout
									</Text>
								</View>
							</View>
						</View>
					</CardContent>
				</Card>

				{/* 2-Day Split Plan */}
				<Card className="bg-green-600 p-6 rounded-2xl">
					<CardContent className="flex-row items-center justify-between p-0">
						<View className="flex-1">
							<Text className="text-2xl font-bold text-white">2-Day Split</Text>
							<Text className="text-green-100 text-base">Full Body Focus</Text>
						</View>
						<ChevronRight size={24} className="text-white" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
}
