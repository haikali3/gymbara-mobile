import { useTheme } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import {
	ArrowLeft,
	Check,
	Clock,
	Minus,
	Plus,
	RotateCcw,
	Timer,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

// Mock workout data for all days
const workoutData = {
	"1": {
		title: "Day 1: Mixed Push/Legs",
		exercises: [
			{
				name: "Incline Machine Press",
				sets: 2,
				reps: "8-10",
				rest: 120,
				notes: "45° incline, focus on squeezing your chest.",
			},
			{
				name: "Single-Leg Leg Press (Heavy)",
				sets: 1,
				reps: "6-8 per leg",
				rest: 180,
				notes: "High and wide foot positioning, start with weaker leg.",
			},
			{
				name: "Single-Leg Leg Press (Back off)",
				sets: 1,
				reps: "10-12 per leg",
				rest: 180,
				notes: "High and wide foot positioning, start with weaker leg.",
			},
			{
				name: "Pendlay Row",
				sets: 2,
				reps: "8-10",
				rest: 120,
				notes: "Initiate movement by squeezing shoulder blades together.",
			},
			{
				name: "Glute-Ham Raise",
				sets: 1,
				reps: "10-12",
				rest: 90,
				notes: "Keep hips straight, do Nordic ham curls if no GHR machine.",
			},
			{
				name: "Spider Curl",
				sets: 1,
				reps: "12-15 (dropset)",
				rest: 90,
				notes: "Dropset: perform 12-15 reps, drop weight by ~50%.",
			},
			{
				name: "Cable Lateral Raise",
				sets: 1,
				reps: "12-15 (dropset)",
				rest: 90,
				notes: "Dropset: perform 12-15 reps, drop weight by ~50%.",
			},
			{
				name: "Hanging Leg Raise",
				sets: 1,
				reps: "12-15",
				rest: 90,
				notes: "Knees to chest, controlled reps.",
			},
		],
	},
	"2": {
		title: "Day 2: Pull/Push Upper",
		exercises: [
			{
				name: "2-Grip Pullup",
				sets: 2,
				reps: "8-10",
				rest: 180,
				notes: "First set 1.5x shoulder width, second set 1.0x shoulder width.",
			},
			{
				name: "Weighted Dip (Heavy)",
				sets: 1,
				reps: "6-8",
				rest: 180,
				notes: "Tuck elbows at 45°, lean torso forward 15°.",
			},
			{
				name: "Weighted Dip (Back off)",
				sets: 1,
				reps: "10-12",
				rest: 180,
				notes: "Tuck elbows at 45°, lean torso forward 15°.",
			},
			{
				name: "Incline Chest-Supported DB Row",
				sets: 2,
				reps: "8-10",
				rest: 120,
				notes: "Keep elbows at ~30° angle from torso.",
			},
			{
				name: "Standing DB Arnold Press",
				sets: 2,
				reps: "8-10",
				rest: 120,
				notes: "Start with elbows in front and palms facing in.",
			},
			{
				name: "DB Incline Curl",
				sets: 2,
				reps: "15-20",
				rest: 0,
				notes: "Superset with French Press.",
			},
			{
				name: "DB French Press",
				sets: 2,
				reps: "15-20",
				rest: 90,
				notes: "Press dumbbell straight up and down behind head.",
			},
		],
	},
	"3": {
		title: "Day 3: Legs Focus",
		exercises: [
			{
				name: "DB Bulgarian Split Squat",
				sets: 3,
				reps: "10-12",
				rest: 120,
				notes: "Start with your weaker leg. Squat deep.",
			},
			{
				name: "DB Romanian Deadlift",
				sets: 2,
				reps: "10-12",
				rest: 120,
				notes: "Emphasize the stretch in your hamstrings.",
			},
			{
				name: "Goblet Squat",
				sets: 1,
				reps: "12-15",
				rest: 90,
				notes: "Hold dumbbell underneath chin, sit back and down.",
			},
			{
				name: "Leg Press Toe Press",
				sets: 2,
				reps: "15-20",
				rest: 0,
				notes: "Superset with Machine Crunch.",
			},
			{
				name: "Machine Crunch",
				sets: 2,
				reps: "10-12",
				rest: 90,
				notes: "Squeeze abs to move the weight.",
			},
		],
	},
};

export default function WorkoutRoutineScreen() {
	const { colors } = useTheme();
	const { day } = useLocalSearchParams();
	const currentDay = day as string;
	const workout = workoutData[currentDay as keyof typeof workoutData];

	const [currentExercise, setCurrentExercise] = useState(0);
	const [currentSet, setCurrentSet] = useState(0);
	const [completedSets, setCompletedSets] = useState<boolean[][]>(
		workout?.exercises.map((exercise) => Array(exercise.sets).fill(false)) ||
			[],
	);
	const [restTimer, setRestTimer] = useState(0);
	const [isResting, setIsResting] = useState(false);
	const [weight, setWeight] = useState(0);
	const [reps, setReps] = useState(0);

	if (!workout) {
		return (
			<View className="flex-1 justify-center items-center">
				<Text className="text-lg">Workout not found</Text>
			</View>
		);
	}

	const currentExerciseData = workout.exercises[currentExercise];
	const totalSets = currentExerciseData?.sets || 0;
	const isLastSet = currentSet >= totalSets - 1;
	const isLastExercise = currentExercise >= workout.exercises.length - 1;

	const markSetComplete = () => {
		const newCompletedSets = [...completedSets];
		newCompletedSets[currentExercise][currentSet] = true;
		setCompletedSets(newCompletedSets);

		if (isLastSet) {
			if (isLastExercise) {
				// Workout complete
				router.push("/(tabs)/workout");
			} else {
				// Move to next exercise
				setCurrentExercise(currentExercise + 1);
				setCurrentSet(0);
			}
		} else {
			// Move to next set
			setCurrentSet(currentSet + 1);
		}

		// Start rest timer
		if (!isLastSet || !isLastExercise) {
			setRestTimer(currentExerciseData.rest);
			setIsResting(true);
		}
	};

	const skipSet = () => {
		if (isLastSet) {
			if (isLastExercise) {
				router.push("/(tabs)/workout");
			} else {
				setCurrentExercise(currentExercise + 1);
				setCurrentSet(0);
			}
		} else {
			setCurrentSet(currentSet + 1);
		}
	};

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
						<Text className="text-2xl font-bold text-foreground">
							{workout.title}
						</Text>
						<Text className="text-lg text-muted-foreground">
							Exercise {currentExercise + 1} of {workout.exercises.length}
						</Text>
					</View>
				</View>

				{/* Progress Bar */}
				<View className="mb-6">
					<View className="flex-row justify-between mb-2">
						<Text className="text-sm text-muted-foreground">Progress</Text>
						<Text className="text-sm text-muted-foreground">
							{Math.round(
								((currentExercise + (currentSet + 1) / totalSets) /
									workout.exercises.length) *
									100,
							)}
							%
						</Text>
					</View>
					<View className="w-full bg-muted rounded-full h-2">
						<View
							className="bg-primary rounded-full h-2 transition-all duration-300"
							style={{
								width: `${((currentExercise + (currentSet + 1) / totalSets) / workout.exercises.length) * 100}%`,
							}}
						/>
					</View>
				</View>

				{/* Rest Timer */}
				{isResting && (
					<Card className="mb-6 bg-orange-50 border-orange-200">
						<CardContent className="p-4">
							<View className="flex-row items-center justify-between">
								<View className="flex-row items-center">
									<Timer size={24} color={colors.primary} />
									<Text className="ml-2 text-lg font-semibold text-orange-900">
										Rest Time
									</Text>
								</View>
								<View className="flex-row items-center">
									<Text className="text-2xl font-bold text-orange-900 mr-4">
										{Math.floor(restTimer / 60)}:
										{(restTimer % 60).toString().padStart(2, "0")}
									</Text>
									<Button
										variant="outline"
										size="sm"
										onPress={() => setIsResting(false)}
									>
										<Text>Skip</Text>
									</Button>
								</View>
							</View>
						</CardContent>
					</Card>
				)}

				{/* Current Exercise */}
				<Card className="mb-6">
					<CardHeader>
						<CardTitle className="text-2xl">
							{currentExerciseData.name}
						</CardTitle>
						<Text className="text-muted-foreground">
							Set {currentSet + 1} of {totalSets} • {currentExerciseData.reps}{" "}
							reps
						</Text>
					</CardHeader>
					<CardContent>
						<Text className="text-sm text-muted-foreground mb-4">
							{currentExerciseData.notes}
						</Text>

						{/* Weight and Reps Input */}
						<View className="flex-row justify-between mb-6">
							<View className="flex-1 mr-4">
								<Text className="text-sm font-medium mb-2">Weight</Text>
								<View className="flex-row items-center">
									<Button
										variant="outline"
										size="sm"
										onPress={() => setWeight(Math.max(0, weight - 2.5))}
									>
										<Minus size={16} />
									</Button>
									<Text className="mx-4 text-lg font-semibold min-w-16 text-center">
										{weight} kg
									</Text>
									<Button
										variant="outline"
										size="sm"
										onPress={() => setWeight(weight + 2.5)}
									>
										<Plus size={16} />
									</Button>
								</View>
							</View>
							<View className="flex-1">
								<Text className="text-sm font-medium mb-2">Reps</Text>
								<View className="flex-row items-center">
									<Button
										variant="outline"
										size="sm"
										onPress={() => setReps(Math.max(0, reps - 1))}
									>
										<Minus size={16} />
									</Button>
									<Text className="mx-4 text-lg font-semibold min-w-16 text-center">
										{reps}
									</Text>
									<Button
										variant="outline"
										size="sm"
										onPress={() => setReps(reps + 1)}
									>
										<Plus size={16} />
									</Button>
								</View>
							</View>
						</View>

						{/* Set History */}
						<View className="mb-4">
							<Text className="text-sm font-medium mb-2">Set History</Text>
							<View className="flex-row flex-wrap gap-2">
								{Array.from({ length: totalSets }, (_, index) => {
									const setNumber = index + 1;
									return (
										<View
											key={`set-history-${setNumber}`}
											className={`px-3 py-1 rounded-full ${
												completedSets[currentExercise][index]
													? "bg-green-100 border-green-300"
													: index === currentSet
														? "bg-primary/20 border-primary"
														: "bg-muted border-muted"
											}`}
										>
											<Text
												className={`text-sm ${
													completedSets[currentExercise][index]
														? "text-green-700"
														: index === currentSet
															? "text-primary"
															: "text-muted-foreground"
												}`}
											>
												Set {setNumber}
												{completedSets[currentExercise][index] && (
													<Check size={12} className="ml-1" />
												)}
											</Text>
										</View>
									);
								})}
							</View>
						</View>

						{/* Action Buttons */}
						<View className="flex-row gap-3">
							<Button variant="outline" className="flex-1" onPress={skipSet}>
								<Text>Skip Set</Text>
							</Button>
							<Button className="flex-1" onPress={markSetComplete}>
								<Text>Complete Set</Text>
							</Button>
						</View>
					</CardContent>
				</Card>

				{/* Exercise List */}
				<Card>
					<CardHeader>
						<CardTitle>Exercise List</CardTitle>
					</CardHeader>
					<CardContent>
						{workout.exercises.map((exercise, index) => (
							<View
								key={exercise.name}
								className={`flex-row items-center justify-between py-2 px-3 rounded-lg mb-2 ${
									index === currentExercise ? "bg-primary/10" : "bg-muted/50"
								}`}
							>
								<View className="flex-1">
									<Text
										className={`font-medium ${
											index === currentExercise
												? "text-primary"
												: "text-foreground"
										}`}
									>
										{exercise.name}
									</Text>
									<Text className="text-sm text-muted-foreground">
										{exercise.sets} sets • {exercise.reps} reps
									</Text>
								</View>
								<View className="flex-row gap-1">
									{Array.from({ length: exercise.sets }, (_, setIndex) => (
										<View
											key={`${exercise.name}-set-${setIndex}`}
											className={`w-3 h-3 rounded-full ${
												completedSets[index][setIndex]
													? "bg-green-500"
													: "bg-muted"
											}`}
										/>
									))}
								</View>
							</View>
						))}
					</CardContent>
				</Card>

				{/* Bottom spacing */}
				<View className="h-8" />
			</View>
		</ScrollView>
	);
}
