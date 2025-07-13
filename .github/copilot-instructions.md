# Copilot Instructions for a React Native Codebase using NativeWind and Reusable Components

# General Goals
- Write idiomatic, clean, and maintainable React Native code in TypeScript.
- Use functional components and React hooks. Avoid class components.
- Follow the latest best practices from the React Native and React ecosystems.
- Prefer reusable, composable components and hooks.
- Use NativeWind for styling; do not use inline styles or StyleSheet unless necessary.

# File & Folder Structure
- Organize components by feature, not by type (use a feature-based directory structure).
- Place reusable UI components in a `/components` directory.
- Place hooks in a `/hooks` directory.
- Place screens in a `/screens` directory.
- Place utility functions in a `/utils` directory.

# Naming Conventions
- Use PascalCase for components (e.g., UserCard, ProductList).
- Use camelCase for variables and functions.
- Use kebab-case for file and folder names (e.g., user-card.tsx).
- Name hooks with the `use` prefix (e.g., useAuth, useTheme).
- Use descriptive names for components, props, and functions.

# Styling
- Use NativeWind (Tailwind CSS classes) for all styling.
- Prefer utility classes over custom styles.
- Never use inline styles unless absolutely necessary.
- If NativeWind cannot achieve a style, use StyleSheet.create with clear class naming.

# Component Design
- Components should be small, focused, and reusable.
- Accept props for customization; use TypeScript interfaces for prop typing.
- Extract logic into hooks if it will be reused or to keep components simple.
- Use children prop for composition where appropriate.

# TypeScript
- Use TypeScript everywhere.
- Always type props, state, and function parameters/returns.
- Avoid using `any`; prefer unknown or explicit types.

# Documentation & Comments
- Write JSDoc comments for complex components, functions, and hooks.
- Write meaningful descriptions for exported functions and components.
- Avoid unnecessary comments; code should be self-explanatory where possible.

# Imports & Exports
- Use absolute imports with module aliasing (e.g., `import { Button } from "@/components"`).
- Prefer named exports over default exports.

# Testing
- Write tests for important logic and reusable components (e.g., using Jest and React Native Testing Library).
- Place tests next to the file being tested (e.g., `user-card.test.tsx`).

# Accessibility
- Make components accessible wherever possible (use accessible props, proper roles, and labels).

# Copilot Usage
- Prefer Copilot suggestions that follow the above rules.
- If Copilot suggests code that does not meet these guidelines, refactor it.

# Do not:
- Do not use deprecated React Native APIs.
- Do not use inline styles except for dynamic cases.
- Do not use class components.
- Do not use magic numbers or strings; use constants or enums.

# Example Component Skeleton

# Good Example:
# 
# import { Text, View } from "react-native";
# import { tw } from "nativewind";
# 
# interface UserCardProps {
#   name: string;
#   avatarUrl: string;
# }
# 
# export function UserCard({ name, avatarUrl }: UserCardProps) {
#   return (
#     <View className="flex-row items-center p-4 bg-white rounded-lg shadow">
#       <Image source={{ uri: avatarUrl }} className="w-12 h-12 rounded-full mr-4" />
#       <Text className="text-lg font-semibold">{name}</Text>
#     </View>
#   );
# }
