import { StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { useEffect } from "react";
import { CreateStyle } from "../../utils/create-style";

const makeStyle = CreateStyle((theme) => ({
  text: {
    color: theme.white,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
}));

export function HomePage() {
  const { theme, setTheme } = useThemeContext();
  const styles = makeStyle();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{theme.backgroundColor}</Text>
    </View>
  );
}
