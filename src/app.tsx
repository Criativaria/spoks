import { ThemeProvider } from "./context/theme/theme.provider";
import { StatusBar } from "expo-status-bar";
import { useFont } from "./hooks/use-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Routes } from "./utils/routes/routes";
import { tokenCache } from "./api/user/token-cache";

const PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export function App() {
  const [loaded] = useFont();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <ThemeProvider>
          <StatusBar style="dark" />
          <Routes />
        </ThemeProvider>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
