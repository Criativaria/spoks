import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "./context/theme/theme.provider";
import { HomePage } from "./pages/home/home.page";
import { StatusBar } from "expo-status-bar";
import { ItemList } from "./components/item-list";
import { useFont } from "./hooks/use-font";

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
            marginTop: 300,
          }}
        ></View>
      </ThemeProvider>
    </SafeAreaView>
  );
}
