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
import {
  addFavoriteProgram,
  getFavoritesPrograms,
  removeFavoriteProgram,
} from "./utils/storage/program";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function App() {
  const [loaded] = useFont();

  useEffect(() => {
    teste();
  }, []);

  if (!loaded) {
    return;
  }

  async function teste() {
    await AsyncStorage.clear();

    console.log("teste 1 = ", await getFavoritesPrograms()); //retornar []

    await addFavoriteProgram({
      category: "aaaaaaaaa",
      channel: "aaaaaaaaaaa",
      id: "aaaaaaaaaaaa",
      name: "aaaaaaaaaaaa",
    });
    console.log("teste 2 = ", await getFavoritesPrograms()); //retornar [aaaaaaaaaaaaaa]

    await addFavoriteProgram({
      category: "aaaaaaaaa",
      channel: "aaaaaaaaaaa",
      id: "bbbbbbbbbbbbbb",
      name: "aaaaaaaaaaaa",
    });
    console.log("teste 3 = ", await getFavoritesPrograms()); //retornar [aaaaaaaaaaaaaa]

    await removeFavoriteProgram({
      category: "aaaaaaaaa",
      channel: "aaaaaaaaaaa",
      id: "aaaaaaaaaaaa",
      name: "aaaaaaaaaaaa",
    });

    console.log("teste 4 = ", await getFavoritesPrograms()); //retornar []
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
