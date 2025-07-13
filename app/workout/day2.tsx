import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { ArrowLeft, Clock, Target, Zap } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

// Mock data for Day 2 exercises based on plan.md
const day2Exercises = [
	{
		name: "2-Grip Pullup",
		warmUpSets: "1-2",
		workingSets: "2",
		reps: "8-10",
		rpe: "9-10",
		rest: "~3 mins",
		notes:
			"First set 1.5x shoulder width grip. Second set 1.0x shoulder width grip.",
		substitutions: ["Machine Pulldown", "2-Grip Lat Pulldown"],
	},
	{
		name: "Weighted Dip (Heavy)",
		warmUpSets: "2-3",
		workingSets: "1",
		reps: "6-8",
		rpe: "8-9",
		rest: "~3 mins",
		notes: "Tuck elbows at 45°, lean torso forward 15°, shoulder width grip.",
		substitutions: ["Machine Chest Press", "Flat DB Press"],
	},
	{
		name: "Weighted Dip (Back off)",
		warmUpSets: "0",
		workingSets: "1",
		reps: "10-12",
		rpe: "9-10",
		rest: "~3 mins",
		notes: "Tuck elbows at 45°, lean torso forward 15°, shoulder width grip.",
		substitutions: ["Machine Chest Press", "Flat DB Press"],
	},
	{
		name: "Incline Chest-Supported DB Row",
		warmUpSets: "1",
		workingSets: "2",
		reps: "8-10",
		rpe: "9-10",
		rest: "~2 mins",
		notes: "Keep elbows at ~30° angle from torso. Pull weight towards navel.",
		substitutions: ["Chest-Supported T-Bar Row", "Seated Cable Row"],
	},
	{
		name: "Standing DB Arnold Press",
		warmUpSets: "1",
		workingSets: "2",
		reps: "8-10",
		rpe: "9-10",
		rest: "~2 mins",
		notes:
			"Start with elbows in front and palms facing in. Rotate dumbbells as you press.",
		substitutions: ["Machine Shoulder Press", "Seated DB Shoulder Press"],
	},
	{
		name: "DB Incline Curl (A1)",
		warmUpSets: "1",
		workingSets: "2",
		reps: "15-20",
		rpe: "10",
		rest: "0 mins",
		notes: "Brace upper back against 45° incline bench, keep shoulders back.",
		substitutions: ["Cable EZ Curl", "EZ Bar Curl"],
	},
	{
		name: "DB French Press (A2)",
		warmUpSets: "1",
		workingSets: "2",
		reps: "15-20",
		rpe: "10",
		rest: "~1.5 mins",
		notes:
			"Can perform seated or standing. Press dumbbell straight up and down behind head.",
		substitutions: ["Overhead Cable Triceps Extension", "EZ Bar Skull Crusher"],
	},
];

export default function Day2WorkoutScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView className="flex-1 bg-secondary/30">
			<View className="px-6 py-4">
				{/* Header */}
				<View className="flex-row items-center mb-6">
					<Button
						variant="ghost"
						size="sm"
						onPress={() => router.back()}
						className="mr-4"
					>
						<ArrowLeft size={20} color={colors.text} />
					</Button>
					<View className="flex-1">
						<Text className="text-3xl font-bold text-foreground">
							Day 2: Pull/Push Upper
						</Text>
						<Text className="text-lg text-muted-foreground">
							Upper body focus
						</Text>
					</View>
				</View>

				{/* Workout Summary */}
				<Card className="mb-6">
					<CardHeader>
						<CardTitle>Workout Summary</CardTitle>
					</CardHeader>
					<CardContent>
						<View className="flex-row justify-between">
							<View className="flex-row items-center">
								<Target size={18} color={colors.primary} />
								<Text className="ml-2 text-sm text-muted-foreground">
									7 exercises
								</Text>
							</View>
							<View className="flex-row items-center">
								<Clock size={18} color={colors.primary} />
								<Text className="ml-2 text-sm text-muted-foreground">
									40-55 min
								</Text>
							</View>
							<View className="flex-row items-center">
								<Zap size={18} color={colors.primary} />
								<Text className="ml-2 text-sm text-muted-foreground">
									Intermediate
								</Text>
							</View>
						</View>
					</CardContent>
				</Card>

				{/* Start Workout Button */}
				<Button
					className="mb-6"
					onPress={() => router.push("/workout/routine?day=2")}
				>
					<Text className="text-lg font-semibold">Start Workout</Text>
				</Button>

				{/* Exercise List */}
				<View className="mb-6">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Exercise List
					</Text>
					{day2Exercises.map((exercise, index) => (
						<Card key={index} className="mb-4">
							<CardContent className="p-4">
								<Text className="text-lg font-semibold text-foreground mb-2">
									{index + 1}. {exercise.name}
								</Text>

								<View className="flex-row flex-wrap gap-4 mb-3">
									<View className="bg-primary/10 px-3 py-1 rounded-full">
										<Text className="text-sm text-primary font-medium">
											{exercise.workingSets} sets
										</Text>
									</View>
									<View className="bg-primary/10 px-3 py-1 rounded-full">
										<Text className="text-sm text-primary font-medium">
											{exercise.reps} reps
										</Text>
									</View>
									<View className="bg-primary/10 px-3 py-1 rounded-full">
										<Text className="text-sm text-primary font-medium">
											RPE {exercise.rpe}
										</Text>
									</View>
									<View className="bg-primary/10 px-3 py-1 rounded-full">
										<Text className="text-sm text-primary font-medium">
											Rest {exercise.rest}
										</Text>
									</View>
								</View>

								<Text className="text-sm text-muted-foreground mb-2">
									{exercise.notes}
								</Text>

								{exercise.substitutions.length > 0 && (
									<View>
										<Text className="text-sm font-medium text-foreground mb-1">
											Substitutions:
										</Text>
										<Text className="text-sm text-muted-foreground">
											{exercise.substitutions.join(", ")}
										</Text>
									</View>
								)}
							</CardContent>
						</Card>
					))}
				</View>

				{/* Bottom spacing */}
				<View className="h-8" />
			</View>
		</ScrollView>
	);
}
