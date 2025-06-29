import * as React from "react";
import { View, ScrollView } from "react-native";
import { Target, Clock, TrendingUp, Play } from "lucide-react-native";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

export default function WorkoutScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 space-y-6">
        {/* Stats Section */}
        <View className="flex-row justify-between space-x-3">
          <Card className="flex-1 p-4 bg-card">
            <CardContent className="items-center space-y-2 p-0">
              <Target size={24} className="text-blue-500" />
              <Text className="text-2xl font-bold text-foreground">7</Text>
              <Text className="text-sm text-muted-foreground">Day Streak</Text>
            </CardContent>
          </Card>

          <Card className="flex-1 p-4 bg-card">
            <CardContent className="items-center space-y-2 p-0">
              <Clock size={24} className="text-green-500" />
              <Text className="text-2xl font-bold text-foreground">45</Text>
              <Text className="text-sm text-muted-foreground">Min Total</Text>
            </CardContent>
          </Card>

          <Card className="flex-1 p-4 bg-card">
            <CardContent className="items-center space-y-2 p-0">
              <TrendingUp size={24} className="text-orange-500" />
              <Text className="text-2xl font-bold text-foreground">12</Text>
              <Text className="text-sm text-muted-foreground">Workouts</Text>
            </CardContent>
          </Card>
        </View>

        {/* Quick Start Section */}
        <View className="space-y-3">
          <Text className="text-xl font-semibold text-foreground">
            Quick Start
          </Text>

          <Card className="bg-blue-600 p-6 rounded-2xl">
            <CardContent className="flex-row items-center justify-between p-0">
              <View className="space-y-1">
                <Text className="text-lg font-semibold text-white">
                  Today's Workout
                </Text>
                <Text className="text-blue-100">Upper Body • 30 min</Text>
              </View>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 rounded-full w-12 h-12"
                onPress={() => router.push("/(tabs)/workout-plans")}
              >
                <Play size={20} className="text-white ml-1" />
              </Button>
            </CardContent>
          </Card>
        </View>

        {/* Recent Activity Section */}
        <View className="space-y-3">
          <Text className="text-xl font-semibold text-foreground">
            Recent Activity
          </Text>

          <View className="space-y-3">
            <View className="flex-row items-center space-x-3">
              <View className="w-2 h-2 rounded-full bg-blue-500" />
              <View className="flex-1">
                <Text className="text-base font-medium text-foreground">
                  Upper Body Workout
                </Text>
                <Text className="text-sm text-muted-foreground">
                  2 hours ago • 35 min
                </Text>
              </View>
            </View>

            <View className="flex-row items-center space-x-3">
              <View className="w-2 h-2 rounded-full bg-blue-500" />
              <View className="flex-1">
                <Text className="text-base font-medium text-foreground">
                  Lower Body Workout
                </Text>
                <Text className="text-sm text-muted-foreground">
                  Yesterday • 40 min
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
