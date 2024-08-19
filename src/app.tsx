import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "./context/theme/theme.provider";
import { HomePage } from "./pages/home/home.page";
import { StatusBar } from "expo-status-bar";
import { ItemList } from "./components/item-list";
import { useFont } from "./hooks/use-font";
import {
  addFavoriteChannel,
  getFavoritesChannels,
  removeFavoriteChannel,
} from "./utils/storage/channels";
import { useEffect } from "react";

export function App() {
  const [loaded] = useFont();

  useEffect(() => {
    teste();
  }, []);

  if (!loaded) {
    return;
  }

  async function teste() {
    console.log("list1 :", await getFavoritesChannels());

    await addFavoriteChannel("aaaaaaaaaaa");
    console.log("list2 :", await getFavoritesChannels());

    await removeFavoriteChannel("aaaaaaaaaaa");
    console.log("list3 :", await getFavoritesChannels());
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
