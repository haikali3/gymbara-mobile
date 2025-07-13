import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { ArrowLeft, Clock, Target, Zap } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

// Mock data for Day 3 exercises based on plan.md
const day3Exercises = [
	{
		name: "DB Bulgarian Split Squat",
		warmUpSets: "2",
		workingSets: "3",
		reps: "10-12",
		rpe: "8-9",
		rest: "~2 mins",
		notes: "Start with your weaker leg. Squat deep.",
		substitutions: ["Goblet Squat", "Leg Press Toe Press"],
	},
	{
		name: "DB Romanian Deadlift",
		warmUpSets: "2",
		workingSets: "2",
		reps: "10-12",
		rpe: "8-9",
		rest: "~2 mins",
		notes:
			"Emphasize the stretch in your hamstrings, prevent lower back rounding.",
		substitutions: ["Romanian Deadlift", "45° Hyperextension"],
	},
	{
		name: "Goblet Squat",
		warmUpSets: "1",
		workingSets: "1",
		reps: "12-15",
		rpe: "9-10",
		rest: "~1.5 mins",
		notes:
			"Hold dumbbell underneath chin, sit back and down, push knees out laterally.",
		substitutions: ["Leg Extension", "Step Up"],
	},
	{
		name: "Leg Press Toe Press (A1)",
		warmUpSets: "1",
		workingSets: "2",
		reps: "15-20",
		rpe: "10",
		rest: "0 mins",
		notes:
			"Press all the way up to your toes, stretch calves at bottom, don't bounce.",
		substitutions: ["Standing Calf Raise", "Seated Calf Raise"],
	},
	{
		name: "Machine Crunch (A2)",
		warmUpSets: "1",
		workingSets: "2",
		reps: "10-12",
		rpe: "1-9",
		rest: "~1.5 mins",
		notes: "Squeeze abs to move the weight, don't use arms to help.",
		substitutions: ["Plate-Weighted Crunch", "Cable Crunch"],
	},
];

export default function Day3WorkoutScreen() {
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
							Day 3: Legs Focus
						</Text>
						<Text className="text-lg text-muted-foreground">
							Lower body focus
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
									5 exercises
								</Text>
							</View>
							<View className="flex-row items-center">
								<Clock size={18} color={colors.primary} />
								<Text className="ml-2 text-sm text-muted-foreground">
									30-45 min
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
					onPress={() => router.push("/workout/routine?day=3")}
				>
					<Text className="text-lg font-semibold">Start Workout</Text>
				</Button>

				{/* Exercise List */}
				<View className="mb-6">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Exercise List
					</Text>
					{day3Exercises.map((exercise, index) => (
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
