# Gymbara Mobile - Project Information

## Tech Stack
- **Framework**: Expo (React Native)
- **UI Components**: React Native Reusables
- **Icons**: Phosphor Icons (https://phosphoricons.com/)
- **Platform**: React Native Mobile
- **Package Manager**: pnpm
- **Language**: TypeScript

## Design Principles

### 1. Mobile-First Design
- Prioritize touch interactions and mobile gestures
- Design for thumb-friendly navigation zones
- Ensure adequate touch target sizes (minimum 44px)

### 2. Performance & Responsiveness
- Optimize for smooth 60fps animations
- Lazy load heavy components and images
- Use React Native's performance best practices
- Minimize bridge calls between JS and native code

### 3. Accessibility
- Support screen readers and assistive technologies
- Provide semantic labeling for all interactive elements
- Ensure sufficient color contrast ratios
- Support dynamic text sizing

### 4. Consistent Visual Language
- Use Phosphor Icons consistently throughout the app
- Maintain consistent spacing, typography, and color schemes
- Follow platform-specific design guidelines (iOS Human Interface Guidelines, Material Design)

### 5. Component Reusability
- Leverage React Native Reusables for consistent UI components
- Create atomic design patterns with reusable components
- Maintain a clear component hierarchy and naming convention

### 6. User Experience
- Provide clear feedback for user actions
- Implement intuitive navigation patterns
- Use appropriate loading states and error handling
- Design for offline-first experiences where applicable

### 7. Code Quality
- Follow TypeScript best practices
- Implement proper error boundaries
- Use proper prop types and interface definitions
- Maintain consistent code formatting and linting rules

## Development Commands
- `pnpm lint` - Run linting
- `pnpm typecheck` - Run TypeScript checks
- `pnpm ios` - Run project for iOS
- `pnpm android` - Run project for Android
- `pnpm start` - Start Expo development server
- `pnpm build` - Build project for production

## Project Structure
- `/app` - Main application code (Expo Router)
- `/components` - Reusable UI components
- `/constants` - App constants and configuration
- `/hooks` - Custom React hooks
- `/types` - TypeScript type definitions
- `/utils` - Utility functions

## Coding Standards
- Use TypeScript for all new code
- Follow Expo and React Native best practices
- Implement proper error handling and loading states
- Write meaningful commit messages
- Test components and functions where applicable