import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "./context/theme/theme.provider";
import { StatusBar } from "expo-status-bar";
import { useFont } from "./hooks/use-font";
import { ChannelsPage } from "./pages/channel-page";
import { ProgramsPage } from "./pages/program-page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function App() {
  const [loaded] = useFont();

  if (!loaded) {
    return;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar style="dark" />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Stack.Navigator initialRouteName="channel">
            <Stack.Screen
              name="channel"
              component={ChannelsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="program"
              component={ProgramsPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
}
