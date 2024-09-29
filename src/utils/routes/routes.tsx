import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChannelsPage } from "../../pages/channel-page";
import { ProgramsPage } from "../../pages/program-page";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";

import * as Linking from "expo-linking"
import { HomePage } from "../../pages/home-page";
import ConfigPage from "../../pages/config-page";

export function Routes() {

  const Stack = createNativeStackNavigator();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return;

  // if (!isSignedIn) return <HomePage />;

  return (
    <NavigationContainer linking={{ prefixes: [Linking.createURL("/")] }}>
      <Stack.Navigator initialRouteName="config">
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
        <Stack.Screen
          name="config"
          component={ConfigPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
