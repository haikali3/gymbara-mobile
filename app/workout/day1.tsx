import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { ArrowLeft, Clock, Target, Zap } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

// Mock data for Day 1 exercises based on plan.md
const day1Exercises = [
	{
		name: "Incline Machine Press",
		warmUpSets: "1-2",
		workingSets: "2",
		reps: "8-10",
		rpe: "9-10",
		rest: "~2 mins",
		notes: "45° incline, focus on squeezing your chest.",
		substitutions: ["Incline Smith Machine Press", "Incline DB Press"],
	},
	{
		name: "Single-Leg Leg Press (Heavy)",
		warmUpSets: "2-3",
		workingSets: "1",
		reps: "6-8 per leg",
		rpe: "8-9",
		rest: "~3 mins",
		notes: "High and wide foot positioning, start with weaker leg.",
		substitutions: ["Machine Squat", "Hack Squat"],
	},
	{
		name: "Single-Leg Leg Press (Back off)",
		warmUpSets: "0",
		workingSets: "1",
		reps: "10-12 per leg",
		rpe: "8-9",
		rest: "~3 mins",
		notes: "High and wide foot positioning, start with weaker leg.",
		substitutions: ["Machine Squat", "Hack Squat"],
	},
	{
		name: "Pendlay Row",
		warmUpSets: "2",
		workingSets: "2",
		reps: "8-10",
		rpe: "9-10",
		rest: "~2 mins",
		notes:
			"Initiate movement by squeezing shoulder blades together, pull to lower chest.",
		substitutions: ["T-Bar Row", "Seated Cable Row"],
	},
	{
		name: "Glute-Ham Raise",
		warmUpSets: "1",
		workingSets: "1",
		reps: "10-12",
		rpe: "10",
		rest: "~1.5 mins",
		notes: "Keep hips straight, do Nordic ham curls if no GHR machine.",
		substitutions: ["Nordic Ham Curl", "Lying Leg Curl"],
	},
	{
		name: "Spider Curl",
		warmUpSets: "1",
		workingSets: "1",
		reps: "12-15 (dropset)",
		rpe: "10",
		rest: "~1.5 mins",
		notes:
			"Dropset: perform 12-15 reps, drop weight by ~50%, additional 12-15 reps.",
		substitutions: ["DB Preacher Curl", "Bayesian Cable Curl"],
	},
	{
		name: "Cable Lateral Raise",
		warmUpSets: "1",
		workingSets: "1",
		reps: "12-15 (dropset)",
		rpe: "10",
		rest: "~1.5 mins",
		notes:
			"Dropset: perform 12-15 reps, drop weight by ~50%. Lean away from cable.",
		substitutions: ["Machine Lateral Raise", "DB Lateral Raise"],
	},
	{
		name: "Hanging Leg Raise",
		warmUpSets: "0",
		workingSets: "1",
		reps: "12-15",
		rpe: "10",
		rest: "~1.5 mins",
		notes:
			"Knees to chest, controlled reps, straighten legs to increase difficulty.",
		substitutions: ["Roman Chair Crunch", "Reverse Crunch"],
	},
];

export default function Day1WorkoutScreen() {
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
							Day 1: Mixed Push/Legs
						</Text>
						<Text className="text-lg text-muted-foreground">
							Upper body focus with legs
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
									8 exercises
								</Text>
							</View>
							<View className="flex-row items-center">
								<Clock size={18} color={colors.primary} />
								<Text className="ml-2 text-sm text-muted-foreground">
									45-60 min
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
					onPress={() => router.push("/workout/routine?day=1")}
				>
					<Text className="text-lg font-semibold">Start Workout</Text>
				</Button>

				{/* Exercise List */}
				<View className="mb-6">
					<Text className="text-xl font-semibold text-foreground mb-4">
						Exercise List
					</Text>
					{day1Exercises.map((exercise, index) => (
						<Card key={exercise.name} className="mb-4">
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
