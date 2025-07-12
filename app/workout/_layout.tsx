import { Stack } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function WorkoutLayout() {
	return (
		<Stack
			screenOptions={{
				headerRight: () => <ThemeToggle />,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Workout",
				}}
			/>
			<Stack.Screen
				name="plans"
				options={{
					title: "Workout Plans",
				}}
			/>
		</Stack>
	);
}
