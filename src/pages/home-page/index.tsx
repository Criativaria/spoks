import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyle } from "./style";

export function HomePage() {

  const style = makeStyle();

  return (
    <SafeAreaView style={style.wrapper}>
    </SafeAreaView>
  );
}
