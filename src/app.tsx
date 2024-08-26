import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "./context/theme/theme.provider";
import { StatusBar } from "expo-status-bar";
import { useFont } from "./hooks/use-font";
import { ChannelsPage } from "./pages/channel-page";

export function App() {
  const [loaded] = useFont();

  if (!loaded) {
    return;
  }
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ThemeProvider>
        <StatusBar style="dark" />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ChannelsPage />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}
